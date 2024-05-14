const mysql = require('mysql');

const getDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'rochaschool',
    port: 3306,
  });
  
  return connection;
}

module.exports = { getDBConnection };
