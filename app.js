const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/EmployeeDB'

// start express
const app = express()
//connect to database
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
	console.log("Connected!")
})

app.use(express.json())

const employeeRoutes = require('./routes/employees')
app.use('/employees',employeeRoutes)

app.listen(5000,function(){
	console.log('Server Started')
})