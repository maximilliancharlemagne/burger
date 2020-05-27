document.body.onload = () => {
  axios.get('/api/burger')
  .then(({data}) => {
    console.log(data)
    for(let index in data){
      if (!data[index].devoured){
        uneatenBurgerElement(data[index])
      }
      else{
        eatenBurgerElement(data[index])
      }
    }
  })
}

document.getElementById('submitBtn').addEventListener('click',(event) => {
  event.preventDefault()
  let newBurger = document.getElementById('newBurger').value
  console.log(newBurger)
  axios.post('/api/burger',{name: newBurger, devoured: false})
})