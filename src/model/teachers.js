const { connectionDB } = require('../database/connection')

const users = {
  list: async () => {
    const connection = await connectionDB();
    const [results] = await connection.query(
      'SELECT * FROM teachers'
    )
    return results;
  },
  
  createUser: async (nome, email, senha) => {
    const connection = await connectionDB();
    const [results] = await connection.query(
      'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );
    return results;
  },
  
  createT: async (nome, materia, turno) => {
    const connection = await connectionDB();
    const [results] = await connection.query(
      'INSERT INTO teachers (nome, materia, turno) VALUES (?, ?, ?)',
      [nome, materia, turno]
    );
    return results
  }
}

module.exports = { users }
