document.getElementById('submitBtn').addEventListener('click',(event) => {
  event.preventDefault()
  let newBurger = document.getElementById('newBurger').value
  let newDiv = document.createElement('div')
  newDiv.setAttribute('class','m-3 p-3 bg-info border rounded')
  let newName = document.createElement('p')
  let newButton = document.createElement('button')
  newButton.setAttribute('id', newBurger)
  newButton.textContent = "Devour"
  newButton.addEventListener('click',(event) => {
    event.preventDefault()
  })
  newName.textContent = newBurger
  newDiv.append(newName)
  newDiv.append(newButton)
  document.getElementById('burgers').append(newDiv)
})