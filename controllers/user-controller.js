const {v4:uuid} = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/https-error');
const User = require('../models/user');
const Student = require('../models/student');


const storeData = async(req,res,next)=>{
    const uid = req.params.uid;
    const {fname,lname,dname,mname,email,phone,hostel,
        gender,
        address,year}=req.body;
    
    try{
        const userExist=await Student.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email already Exist"});
        }
        const user=new Student({fname,lname,dname,mname,email,phone,hostel,gender,year,address});
      
        const saveUser= await user.save();
        console.log(saveUser);
        res.status(201).json({message:"Registration Successful"});        
    }
    catch(err){
        console.log(err);
    }
};

    


const login = async (req,res,next) => {
    const { email,password,_id } = req.body;
   
    let existingUser;

   try{
    existingUser =await User.findOne({ email: email })
    console.log(existingUser);
   } catch (err) {
       const error = new HttpError(
           'Logging in failed',500
       );
       return next(error);
   }

    if(!existingUser || existingUser.password !== password){
        const error = new HttpError(
            'Invalid credentials',400
        );
        return next(error);
    }


    res.json(existingUser);

};


exports.login = login;
exports.storeData = storeData;
