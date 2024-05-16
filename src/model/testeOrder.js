const { connectionDB } = require('../database/connection')

const list = async () => {
  const connection = await connectionDB();
  const [results] = await connection.query(
    'SELECT * FROM teachers'
  )
  return results;
}

const create = async (nome, email, senha) => {
  const connection = await connectionDB();
  const [results] = await connection.query(
    'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  );
  return results;
}

module.exports = {
  list,
  create
}
