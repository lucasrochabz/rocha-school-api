const { connectionDB } = require('../database/connection')

  const list = async () => {
    const connection = await connectionDB();
    const [results] = await connection.query(
      'SELECT * FROM teachers'
    )
    return results;
  }
  
  const create = async (nome, materia, turno) => {
    const connection = await connectionDB();
    const [results] = await connection.query(
      'INSERT INTO teachers (nome, materia, turno) VALUES (?, ?, ?)',
      [nome, materia, turno]
    );
    return results
  }

module.exports = {
  list,
  create
}
