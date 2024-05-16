const express = require('express');

const { listTeachers, createUser, createTeacher } = require('./src/controllers/testeController')

const app = express();
app.use(express.json());

app.get('/school', listTeachers);

app.post('/create-teacher', createTeacher)

app.post('/login', createUser);

app.get('/', (req,res) => {
  res.send('Olá mundo!')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
});
