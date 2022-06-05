const env = require('dotenv').config()
const express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

MongoClient.connect('mongodb-connection-string', (err, client) => {
    // ... do something here
  })

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/items', (req,res) => {
    console.log(req.body)
})