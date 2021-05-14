const {v4:uuid} = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/https-error');
const User = require('../models/user');

// const DUMMY_USERS = [
//     {
//     id:'u1',
//     name : 'Ruchi',
//     email:'test@test.com',
//     password:'testers'

//     }
// ];

// const fillData = async (req,res,next) => {
   
//     const id = req.params.id;
//     let user;
//     user = await User.findById(id);
//     res.json(user.id);
    
// }


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
    const id = existingUser._id;
    res.json(id);

};


exports.login = login;