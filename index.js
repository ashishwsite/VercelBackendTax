
const express= require('express')
const  cors=require('cors')
require('./db')
// const port=process.env.PORT||3000/
const port =3000
const path = require("path");
const app=express()
app.use(cors())
app.use(express.json())
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
app.listen(port,()=>{
    console.log(` backend  is listening at http://localhost:${port}`)
})
// this is not running because build folder not made 
// bad practice of deployment ,because at every change bilid is recreated