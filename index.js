const express = require('express');

const { usersController } = require('./src/controllers/usersController');
const { teacherController } = require('./src/controllers/teachersController');

const app = express();
app.use(express.json());

app.get('/school', teacherController.list);

app.post('/create-teacher', teacherController.createOne)

app.post('/login', usersController.create);

app.get('/', (req,res) => {
  res.send('Olá mundo!')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
});
