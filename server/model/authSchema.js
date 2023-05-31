const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const auth = new Schema({
    firstName:{
        type:String,
        minLength:3,
        maxLength:12
    },
    lastName:{
        type:String,
        minLength:1,
        maxLength:10
    },
    emailId:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Auth = mongoose.model('auth',auth);
module.exports = Auth;