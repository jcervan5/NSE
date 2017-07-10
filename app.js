var express = require('express')
var server = express()
var Jasmine = require('./me.json')

server.get ('/', function (request, response){
  response.send("Jasmine")
})

server.get('/Jasmine', function (request, response) {
  response.json(Jasmine)
})

server.listen(8080)
