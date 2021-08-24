const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

	name:{
		type: String,
		required:true
	},
	phone:{
		type: Number,
		required:true
	},
	location:{
		type: String,
		required:true
	}
},
{ versionKey: false }
)


module.exports = mongoose.model('Employee',employeeSchema)