const { createConnection } = require("mysql") 

const connection = createConnection({
  port: 3306,
  username: 'root',
  password: process.env.DB_PASS,
  database: 'burgers_db',
  host: 'localhost'
})

module.exports = connection