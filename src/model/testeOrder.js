const { connectionDB } = require('../database/connection')

const list = async () => {
  const connection = await connectionDB();
  const [results] = await connection.query(
    'SELECT * FROM teachers'
  )
  return results;
}

const createUser = async (nome, email, senha) => {
  const connection = await connectionDB();
  const [results] = await connection.query(
    'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  );
  return results;
}

const createT = async (nome, materia, turno) => {
  const connection = await connectionDB();
  const [results] = await connection.query(
    'INSERT INTO teachers (nome, materia, turno) VALUES (?, ?, ?)',
    [nome, materia, turno]
  );
  return results
}

module.exports = {
  list,
  createUser,
  createT
}
