const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=7115fd9651af3e8df9036fb4fa6ece42&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true, headers: {
        Au: "sdfs"
    }, body: {
        
    } }, (error, { body }) => {
    if (error) {
        callback("Unable to connect to weather service!", undefined)
    } else if (body.error) {
        callback("Unable to find location!", undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] + ".  It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
    }
})
}

module.exports = forecast