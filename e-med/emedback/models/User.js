const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    }

})
const User=mongoose.model('User',UserSchema)
module.exports=User