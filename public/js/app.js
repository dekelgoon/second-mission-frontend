console.log('dekel was here')

const dictionaryForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
 const translationButton = document.getElementById('button2')


dictionaryForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const word = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

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

 translationButton.addEventListener('click', (e) => {
    e.preventDefault()
    

 })

// fetch ('https://api-free.deepl.com/v2/translate').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             messageOne.textContent = data.error
//         } else {
//             messageOne.textContent = "" + data.definition
//             messageTwo.textContent = "" + data.synonym
//         } 
//     })
//  })
})