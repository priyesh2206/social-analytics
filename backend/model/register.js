const mongoose = require('mongoose');

const RegisterSchema = new  mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    limitHours:{type:Number,required:true},
    limitMintues:{type:Number,required:true},
    password:{type:String,required:true,unique },
    timestamp: { type: Date, default: Date.now}
});
