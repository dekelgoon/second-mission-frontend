const request = require('request')
    
const geocode = (address, callback) => {
    const url = 'https://api.geocod.io/v2/geocode?q=' + encodeURIComponent(address) + '&api_key=645913dfd5aa19a5653fadda4ed34155d9a6fdc&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location.  Try another search.', undefined)
        } else
            callback(undefined, {
                 latitude: body.results[0].location.lat,
                 longitude: body.results[0].location.lng,
                 location: body.results[0].address_components
            })
    })
}

module.exports = geocode