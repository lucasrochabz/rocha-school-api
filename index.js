const express = require('express');
const mysql = require('mysql');

const server = express();

server.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rochaschool'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar-se ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

function query(sql, args) {
  return new Promise((resolve, reject) => {
    connection.query(sql, args, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

server.get('/list', async (req, res) => {
  try {
    const results = await query('SELECT * FROM teachers');
    res.json(results);
  } catch (error) {
    console.error('Erro ao listar professores:', error);
    res.status(500).json({ error: 'Erro ao listar professores' });
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
