const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fname: {type:String, required:true },
    lname: {type:String, required:true },
    mobilenumber : {type:Number, required:true },
    email :{type:String,required :true, unique:true},
    password :{type:String, required:true },
    image:{type:String}
},{collection:'userData'})

const model = mongoose.model('userData',User)

module.exports = model;