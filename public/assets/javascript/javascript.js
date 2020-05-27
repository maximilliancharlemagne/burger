axios.get('/api/burger',data => console.log(data))

document.getElementById('submitBtn').addEventListener('click',(event) => {
  event.preventDefault()
  let newBurger = $('#newBurger').val()
  axios.post('/api/burger',{name: newBurger, devoured: false})
})