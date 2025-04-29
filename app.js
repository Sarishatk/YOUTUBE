const express = require('express')
const app = express();
const mongoose = require('mongoose')
 require('dotenv').config()




mongoose.connect(process.env.MONGO_URL).then(res=>{
console.log('connected with database');

}).catch(err=>{
    console.log('err');
    
})

 module.exports = app