const express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/items', (req,res) => {
    console.log('hello yall')
})