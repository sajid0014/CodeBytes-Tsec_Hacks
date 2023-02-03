const mongoose=require('mongoose');
const {Schema}=mongoose;
const NgoSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    purpose:{
        type:String,
        required:true
    },
    quantity:{
        required:true,
        type:Number,
    },
    

})
const Ngo=mongoose.model('ngo',NgoSchema)
module.exports=Ngo