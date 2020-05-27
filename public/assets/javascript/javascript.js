axios.get('/api/burger',data => console.log(data))

document.getElementById('submitBtn').addEventListener('click',(event) => {
  event.preventDefault()
  let newBurger = document.getElementById('newBurger').value
  console.log(newBurger)
  axios.post('/api/burger',{name: newBurger, devoured: false})
})