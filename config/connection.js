const { createConnection } = require("mysql2") 

const connection = createConnection(process.env.JAWSDB_URL || `mysql://root:${process.env.DB_PASS}@localhost:3306/burgers_db`)

module.exports = connection