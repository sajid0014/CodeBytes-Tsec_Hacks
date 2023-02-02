const mongoose=require('mongoose');
const {Schema}=mongoose;
const NotesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    expdate:{
        type:String,
        required:true,
    },

})
const Notes=mongoose.model('Notes',NotesSchema)
module.exports=Notes