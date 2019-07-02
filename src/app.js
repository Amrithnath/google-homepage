const path=require('path')
const express = require('express')
const app= express()
const publicpath=path.join(__dirname,'../public')
app.use(express.static(publicpath))
console.log(publicpath)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '../../index.html'));
})

app.listen(3000,()=>{
    console.log("Server is up on 3000")
})