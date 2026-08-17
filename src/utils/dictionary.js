const axios = require('axios')

const dictionary = (word, callback) => {
    const url = 'https://freedictionaryapi.com/api/v1/entries/en/' + encodeURIComponent(word)

    axios.get(url)
    .then((response) => {
        if (response.data.error) {
            callback ('Unable to define word.  Try another search.', undefined)
        } else
            callback (undefined, {
                definition: response.data.entries[0].senses[0].definition,
                synonym: response.data.entries[0].synonyms[0]
            })
        }).catch((error) => {
            callback('Unable to connect to dictionary API!', undefined)

        })
    }

module.exports = dictionary