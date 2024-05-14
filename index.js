const express = require('express');
const { getDBConnection } = require("./utils/getDBConnection");

const server = express();

server.use(express.json());


server.get('/list', async (req, res) => {
    const connection = await getDBConnection();

    const results = await connection.query(
      'SELECT * FROM teachers'
    );
    res.json({ teachers: results });
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// connection.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar-se ao banco de dados:', err);
//     return;
//   }
//   console.log('Conexão bem-sucedida ao banco de dados');
// });

// function query(sql, args) {
//   return new Promise((resolve, reject) => {
//     connection.query(sql, args, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// }
