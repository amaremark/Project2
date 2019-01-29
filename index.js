const express = require('express')
const mustacheExpress = require ('mustache-express') 
// we going to have form so we need body parser
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const mustacheExpressInstance = mustacheExpress()
mustacheExpressInstance.cache = null
app.engine('mustache', mustacheExpressInstance)
//any files with a mustach extention will be considerd a tamplate 
app.set('view engine', 'mustache')
app.set('views',__dirname + '/views')

app.get('/', function(req, res){
    res.send('hello')
})
app.listen(3000, function(){
    console.log('listening on port 300')
})
//module.exports = app