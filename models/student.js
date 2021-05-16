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
    // pswd:{
    //     type:String,
    //     required:true
    // },
    phone:{
        type:Number,
        required:true,
        minLength:10,
        maxLength:10,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    seater:{
        type:Number,
        required:true
    },
    hostels:{
        type:String
    },
    address:{
        type:String,
        required:true
    }
})

const Student = mongoose.model('Student',studentSchema);
module.exports=Student;