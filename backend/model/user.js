const mongoose = require('mongoose');

const UserSchema = new  mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    Age:{type:Number,required:true},
    password:{type:String,required:true,unique:true },
    timestamp: { type: Date, default: Date.now}
});

module.exports = mongoose.model('User',UserSchema);