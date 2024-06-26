const express = require('express');
const cors = require('cors');

const { usersController } = require('./src/controllers/usersController');
const { teacherController } = require('./src/controllers/teachersController');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/signup', usersController.createUser);
app.get('/login', usersController.authUser);

app.get('/school', teacherController.listAll);
app.post('/create-teacher', teacherController.createOne);

app.get('/', (req,res) => {
  res.send('Olá mundo!');
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
