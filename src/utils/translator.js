const axios = require('axios')

const translator = (definition, synonym, callback) => {
    const url = 'https://api-free.deepl.com/v2/translate'

    axios.post(url, {
        text: [definition, synonym],
        source_lang: 'EN',
        target_lang: 'HE'
    }, {
        headers: {
            Authorization: 'DeepL-Auth-Key 3e4e9d34-5452-466c-ba5c-1aea70170392:fx'
        }
    })
        .then((response) => {
            if (response.data.error) {
                callback("unable to find translation!", undefined)
            } else {
                const translatedText = response.data.translations[0].text;
                const reversed = translatedText.split('').reverse().join('');
                callback(undefined, {
                    translation: reversed
                })
            }
        }).catch((error) => {
            callback("can't connect or something")
        })
}

module.exports = translator