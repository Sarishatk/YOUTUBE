const express = require('express')
const app = express()

app.get('/test',(req,res)=>{
    res.status(200).json({
        msg:'test api'
    })
})
 module.exports = app