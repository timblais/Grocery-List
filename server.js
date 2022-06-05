const env = require('dotenv').config()
const express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

MongoClient.connect(`mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.8baa0j1.mongodb.net/?retryWrites=true&w=majority`, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('items')
    const itemCollection = db.collection('items')

    app.set('view engine', 'ejs')
    
    app.use(bodyParser.urlencoded({ extended: true }))

    app.listen(3000, function(){
        console.log('listening on 3000')
    })

    app.get('/', (req,res) => {
        db.collection('items').find().toArray()
        .then(results => {
          console.log(results)
        })
        .catch(error => console.error(error))
        res.render('index.ejs', { items: results })
    })

    app.post('/items', (req,res) => {
        itemCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

  })

