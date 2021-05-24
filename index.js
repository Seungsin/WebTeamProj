const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database'), {useNewUrlParser:true}

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})