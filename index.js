const express = require('express');

const { listTeachers } = require('./src/controllers/testeController')

const app = express();

app.get('/school', listTeachers);

app.get('/', (req,res) => {
  res.send('Olá mundo!')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
});
