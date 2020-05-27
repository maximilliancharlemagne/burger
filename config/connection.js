const { createConnection } = require("mysql2") 

const connection = createConnection({
  port: 3306,
  user: 'root',
  password: process.env.DB_PASS,
  database: 'burgers_db',
  host: 'localhost'
})

module.exports = connection