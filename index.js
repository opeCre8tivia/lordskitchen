const express = require('express');
const path  =  require('path');
const mongoose = require('mongoose');
const cors = require('cors');


const bodyParser = require('body-parser')

//init the app

const app = express();

//connecting to mongodb

mongoose.connect('mongodb://localhost:27017/kitchen',  {useNewUrlParser : true,useUnifiedTopology: true}, (err)=>{
    if(err === true){
        console.log('Not Connected to db');
    }
    else{
        console.log('Connected to db');
    }
});

// body parser middleware

app.use(bodyParser.json());

//cors middle ware to allow requests from diffrent domain name

app.use(cors());


//routes
const MenuItems = require('./routes/MenuItems');
const Orders = require('./routes/Orders');
app.use('/api',  MenuItems,Orders );
app.use('/api/auth', require('./routes/Auth'));







// listen on port

const PORT = process.env.PORT || 5000;

app.listen(PORT,  (req, res)=>{
    console.log(`Server started at port ${PORT}`)
} );

