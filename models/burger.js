orm = require('orm.js')

export const burger = {
  getAllBurgers(){
    orm.selectAll('burgers',results=>results)
  }

  createNewBurger(burgerName){
    orm.insertOne('burgers',{name: burgerName,devoured:false},(info)=>console.log(info))
  }

  devourABurger(burgerName){
    orm.updateOne('burgers',{devoured: true},{name: burgerName},(info)=>console.log(info))
  }
}