const express = require('express');
const app = express();

const morgan = require('morgan');
const cors= require('cors');
const bodyParser = require('body-parser');


app.use(morgan());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//routes
app.use('/api/register',require('./router/register.router'));









//conect to mongodb
const mongoose = require('mongoose');
const url="mongodb+srv://rawanakhalid64:000ON1111@cluster0.cimsgly.mongodb.net/Online-Academy?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url).then(()=>{
    console.log("mongodb connection established")
})
module.exports=app;