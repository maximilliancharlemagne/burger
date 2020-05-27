const connection = require('./connection')

const orm = {
  selectAll(table,cb){
    connection.query(`SELECT * FROM ${table}`, (err,results) => {
      if(err){console.log(err)}
      cb(results)
    })
  },

  insertOne(table,data,cb){
    connection.query(`INSERT INTO ${table} SET ?`,data, (err,info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  },

  updateOne(table,property,identifier,cb){
    connection.query(`UPDATE ${table} SET ? WHERE ?`,[property,identifier], (err,info) => {
      if(err){console.log(err)}
      cb(info)
    })
  }
}

module.exports = orm