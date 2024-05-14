const express = require('express');
const { getDBConnection } = require("./utils/getDBConnection");

const server = express();

server.use(express.json());

server.get('/list', async (req, res) => {
  try {
      const connection = await getDBConnection();

      const results = await connection.query(
          'SELECT * FROM teachers'
      );

      console.log(results); // Adicionando um console.log para ver os resultados

      res.json({professores: results}); // Enviando apenas os resultados
  } catch (error) {
      console.error("Erro ao obter dados do banco de dados:", error);
      res.status(500).json({ error: "Erro ao obter dados do banco de dados" });
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
