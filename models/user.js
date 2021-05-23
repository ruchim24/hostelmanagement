const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email : { type: String, required: true, unique:true},
    password: { type: String, required: true, minlength: 6},
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    dname:{type:String,required:true},
    mname:{type:String,required:true},
    mobile:{type:String,required:true},
    address:{type:String,required:true,minlength:10},
    gender:{type:String,required:true},
    year:{type:Number,required:true},
  
   
   
    
    
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);