var express = require('express')
var server = express()
var Jasmine = require('./me.json')
var PORT = process.env.PORT || 8080;

server.get ('/', function (request, response){
  response.send("Jasmine")
})

server.get('/Jasmine', function (request, response) {
  response.json(Jasmine)
})

server.listen(PORT);
