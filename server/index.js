const express = require('express')
require('dotenv').config()
// import express from "express"
const app = express()
const port = 5000


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about',(req,res)=>{
    res.send('aboutus page')
})

app.get('/home',(req,res)=>{
    res.send("Home page")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})