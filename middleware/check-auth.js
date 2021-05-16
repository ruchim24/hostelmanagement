const jwt = require('jsonwebtoken');
const HttpError = require("../models/https-error");

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
           throw new Error('Authentiction failed');
        }
     const decodedToken =  jwt.verify(token,'supersecret_dont_share');
     req.userData = {userId:decodedToken.userId};
     next();

    } catch (err) {
        const error = new HttpError('Authentiction failed',401);
        return next(error);
    }
   
   
}