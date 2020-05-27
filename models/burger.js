orm = require('../config/orm')

const burger = {
  getAll(cb){
    orm.selectAll('burgers',results=>cb(results))
  },

  create(burgerName){
    orm.insertOne('burgers',{burger_name: burgerName,devoured:false},(info)=>console.log(info))
  },

  devour(burgerName){
    orm.updateOne('burgers',{devoured: true},{burger_name: burgerName},(info)=>console.log(info))
  }
}

module.exports = burger