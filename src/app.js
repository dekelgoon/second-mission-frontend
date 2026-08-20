const path = require('path')
const express = require('express')
const hbs = require('hbs')
const dictionary = require('./utils/dictionary')
const translator = require('./utils/translator')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup Static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Dictionary',
        name: 'Dekel Golan'
    })
})

 app.get('/dictionary',(req,res) => {
   if (!req.query.word) {
        return res.send({
            error: 'You must provide a valid word'
        }) 
   }

   dictionary(req.query.word, (error, { definition, synonym } = {}) => {
    if (error) {
        return res.send({ error })
    }

    // translator(req.query.textToTranslate, (error, translation) => {
    //     if (error) {
    //         return res.send({ error })
    //    }

        res.send({
            definition: definition,
            synonym: synonym,
            word: req.query.word,
            // textToTranslate: req.query.textToTranslate
        })
    })
 })
 //})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Dekel Golan'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})