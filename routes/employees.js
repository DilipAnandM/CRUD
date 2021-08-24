const express = require('express')
const routes = express.Router()
const Employee = require('../models/employee')
routes.get('/', async(req,res)=>{
	try{
		const employees = await Employee.find()
		res.json(employees)
	}catch(err){
		res.send('Error '+err)
	}
})

routes.get('/:id', async(req,res)=>{
	try{
		const employees = await Employee.findById(req.params.id)
		res.json(employees)
	}catch(err){
		res.send('Error '+err)
	}
})

routes.post('/',async(req,res) => {
	const emp = new Employee({
		name: req.body.name,
		phone: req.body.phone,
		location: req.body.location
		})
		try{
			const sa = await emp.save()
			res.json(sa)

		}catch(err){
			res.send('Eor')
		}
	
})

routes.patch('/:id',async(req,res)=>{
	try{
		const employee = await Employee.findById(req.params.id)
		employee.location = req.body.location
		const up = await employee.save()
		res.json(up)
	}catch{
		res.send('Error in updating')
	}
})

routes.delete('/:id',async(req,res)=>{
	try{
		const employee = await Employee.findById(req.params.id)
		employee.location = req.body.location
		const up = await employee.remove()
		res.json(up)
	}catch{
		res.send('Error in updating')
	}
})
module.exports = routes