console.log('dekel was here')

const dictionaryForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const translateButton = document.getElementById('translateButton')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')

dictionaryForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const word = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''

fetch('http://localhost:3000/dictionary?word=' + word).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = "" + data.definition
            messageTwo.textContent = "" + data.synonym


        } 
    })
 })

translateButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('it worked')
})
})