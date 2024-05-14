const mysql = require('mysql2/promise')

const connectionDB = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'rochaschool',
    port: 3306,
  })
  return connection
}

module.exports = { connectionDB }
