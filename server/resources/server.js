var express = require('express');
const path = require('path')
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
const cors = require('cors');
const User = require('./resources/user/Client');
const Company = require('./resources/user/Company');

const router = require('./resources/user/userRouter');
const router = require('./resources/user/companyRouter');

// Create the Express application:
const app = express()

// Attach middleware:
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.use('/', express.static(path.join(__dirname, '/./client')))


// Import the eventRouter and assign it to the correct route:


app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the Event-MongoDB RESTful API!' });

});


app.post('/create' , (req,res) => {
  req.body.forEach( ( pokemon ) => {
    let poke = new Client(client)
    poke.save()
  } )
  res.send('done')
})



app.use('/api/event', router); // event data-------------------------------

//this is server from israa
module.exports = app;
//................................................................
// Mo'men functionality