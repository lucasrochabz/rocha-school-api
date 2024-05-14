const { connectionDB } = require('../database/connection')

const list = async () => {
  const connection = await connectionDB();
  const [results] = await connection.query(
    'SELECT * FROM teachers'
  )
  return results;
}

module.exports = {
  list
}
