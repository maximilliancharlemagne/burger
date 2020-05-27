orm = require('orm.js')

export const burger = {
  getAll(){
    orm.selectAll('burgers',results=>results)
  }

  create(burgerName){
    orm.insertOne('burgers',{name: burgerName,devoured:false},(info)=>console.log(info))
  }

  devour(burgerName){
    orm.updateOne('burgers',{devoured: true},{name: burgerName},(info)=>console.log(info))
  }
}