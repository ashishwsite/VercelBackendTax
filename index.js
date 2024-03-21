
const express= require('express')
var cors=require('cors')
require('./db')
const path = require("path");
const app=express()
app.use(express.json())
app.use(cors())
app.use('/',require('./Routes/Auth'))
app.get("/",(req,res)=>{
  res.json("default")
})
  app.get('/home',(req,res)=>{
    res.json("this is home page")
  })
  app.get('/test',(req,res)=>{
    res.json("this is test page")
  })
app.listen(1000,()=>{
    console.log(` backend  is listening at http://localhost:1000`)
})
// this is not running because build folder not made 
// bad practice of deployment ,because at every change bilid is recreated