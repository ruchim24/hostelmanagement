const {v4:uuid} = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/https-error');
const User = require('../models/user');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');

const storeData = async(req,res,next)=>{
    const {fname,lname,dname,mname,email,phone,year,seater,hostels,
        gender,
        address}=req.body;
    if(!fname || !lname || !dname || !mname || !phone || !email || !year || !seater ||!hostels || 
        !gender || 
        !address){
        return res.status(422).json({error:"Please fill all the fields"});
    }
    
    
    try{
        const userExist=await Student.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email already Exist"});
        }
        const user=new Student({fname,lname,dname,mname,email,phone,year,seater,hostels,gender,address});
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
    console.log(email);
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

    // let token;
    // try {
    //   token = jwt.sign(
    //     { userId: existingUser.id, email: existingUser.email },
    //     'supersecret_dont_share',
    //     { expiresIn: '1h' }
    //   );
    // } catch (err) {
    //   const error = new HttpError(
    //     'Logging in failed, please try again later.',
    //     500
    //   );
    //   return next(error);
    // }

    const id = existingUser._id;
    res.json(id);

};


exports.login = login;
exports.storeData = storeData;