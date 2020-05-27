const getBurgers = () => {
  axios.get('/api/burger')
    .then(({ data }) => {
      console.log(data)
      document.getElementById('burgers').innerHTML = ''
      document.getElementById('eatenBurgers').innerHTML = ''
      let burgers = document.createElement('h3')
      burgers.textContent = 'Burgers'
      document.getElementById('burgers').append(burgers)
      let eatenBurgers = document.createElement('h3')
      eatenBurgers.textContent = 'Eaten Burgers'
      document.getElementById('eatenBurgers').append(eatenBurgers)
      for (let index in data) {
        if (!data[index].devoured) {
          uneatenBurgerElement(data[index])
        }
        else {
          eatenBurgerElement(data[index])
        }
      }
    })
}

const uneatenBurgerElement = (anObject) => {
  let newDiv = document.createElement('div')
  newDiv.setAttribute('class','bg-info m-3 p-3 border rounded')
  let newh4 = document.createElement('h4')
  newh4.textContent = anObject.burger_name
  let newButton = document.createElement('button')
  newButton.textContent = 'Devour'
  newButton.addEventListener('click', function (event) {
    event.preventDefault()
    axios.put('/api/burger', { name: anObject.burger_name })
    getBurgers()
  })
  newDiv.append(newh4)
  newDiv.append(newButton)
  document.getElementById('burgers').append(newDiv)
}

const eatenBurgerElement = (anObject) => {
  let newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'bg-danger m-3 p-3 border rounded')
  let newh4 = document.createElement('h4')
  newh4.textContent = anObject.burger_name
  newDiv.append(newh4)
  document.getElementById('eatenBurgers').append(newDiv)
}

document.getElementById('submitBtn').addEventListener('click',(event) => {
  event.preventDefault()
  let newBurger = document.getElementById('newBurger').value
  document.getElementById('newBurger').value = ''
  console.log(newBurger)
  axios.post('/api/burger',{name: newBurger, devoured: false})
  getBurgers()
})

document.body.onload = () => {
  getBurgers()
}