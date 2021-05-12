const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname : { type: String, required: true},
    lastname: { type: String, required: true},
    fathername: { type: String, required: true},
    branch: { type: String, required: true},
    year:{ type: Number, required: true},
    email : { type: String, required: true, unique:true},
    password: { type: String, required: true, minlength: 6},
    paid : {type:Boolean,required:true}
    
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);