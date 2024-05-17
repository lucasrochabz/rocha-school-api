const { connectionDB } = require('../database/connection')

const create = async (nome, email, senha) => {
  const connection = await connectionDB();
  const [results] = await connection.query(
    'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha]
  );
  return results;
}

// query para verificar se usário está cadastrado
// SELECT id, nome, email FROM sua_tabela_usuarios WHERE email = ? AND senha = ?;
const getOne = async (email, senha) => {
  const connection = await connectionDB();
  const [results] = await connection.query(
    'SELECT id FROM users WHERE email = ? AND senha = ?',
    [email, senha]
  );
  return results
}

module.exports = {
  create,
  getOne,
}
