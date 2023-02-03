const express=require('express')
const Ngo=require('../models/Ngo')
const router=express.Router()
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
// Route 1:get all the products list
router.get('/fetchallproducts',async (req,res)=>{

    const ngo=await Ngo.find()
    res.json(ngo)
})
// router.get('/fetchyourproducts',fetchuser,async (req,res)=>{

//     const ngo=await Ngo.find({user:req.user.id})
//     res.json(ngo)
// })
// Route 2:Add products
router.post('/Addproducts',fetchuser,[
    body('name','product should be of minimum 3 character').isLength({min:3}),
],async (req,res)=>{
    try{
    const {name,purpose,quantity}=req.body;
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    }catch(error){
        res.status(500).send("Internal server error Ocuured");
    }
    
    const ngo=new Ngo({
        name,purpose,quantity,user:req.user.id
    })
    //Here we have two ways to send our data first is create method which we used in auth and now this by creating new constructor and savenotes.
    const savengo=await ngo.save()
    res.json(ngo)
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error Ocuured");
}
})
//Route 3:updating notes and login required
// router.put('/updatenotes/:id',fetchuser,async (req,res)=>{
//     const {product,date,price}=req.body
//     //now create an object
//     try {
//         const newretail={}
//     if(product){newretail.product=product};
//     if(date){newretail.date=date};
//     if(price){newretail.price=price};//this is use to make changes in only that field where changes had been occured.
//     //find the note to be updated
//     let retail=await Retail.findById(req.params.id)//check if notes exist or not
//     if(!retail)
//     {
//         return res.status(404).send("Notes not found");
//     }
//     //now check if some user is trying to check another person notes.
//     if(retail.user.toString()!=req.user.id){
//         return res.status(401).send("Not allowed");
//     }
//     //now if all are ok use find and update function of database.
//     retail=await Retail.findByIdAndUpdate(req.params.id,{$set:newretail},{new:true})
//     res.json({retail});
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal server error Ocuured");
//     }
    
    
// })
// Route 4:delete notes
router.delete('/deleteproducts/:id',fetchuser,async (req,res)=>{
    try {
        let ngo=await Ngo.findById(req.params.id)//check if notes exist or not
    if(!ngo)
    {
        return res.status(404).send("Notes not found");
    }
    //now check if some user is trying to check another person notes.
    if(ngo.user.toString()!=req.user.id){
        return res.status(401).send("Not allowed");
    }
    //now if all are ok use find and update function of database.
    ngo=await Ngo.findByIdAndDelete(req.params.id)
    res.json({"success":"note has been deleted",ngo:ngo});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error Ocuured");
    }
    
    
})

module.exports=router