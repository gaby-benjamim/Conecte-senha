// import 

require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()


// Open Route - Public Route
app.get('/', (req,resp)=>{
    resp.status(200).json({msg: "Bem-vindo a nossa api"})
})

app.listen(3000)


