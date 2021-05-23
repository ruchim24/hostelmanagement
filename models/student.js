const mongoose=require("mongoose");
// const validator=require("validatorjs");
const studentSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        minlength:3
    },
    lname:{
        type:String,
        required:true
    },
    dname:{
        type:String,
        required:true
    },
    mname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    phone:{
        type:String,
    },
    gender:{
        type:String,
        required:true
    },
    year:{
        type:String,
    
    },
    hostel:{
        type:String,
        required:true

    },
    address:{
        type:String,
       required:true
    }
})

const Student = mongoose.model('Student',studentSchema);
module.exports=Student;
