const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact')


/*route test
router.get('/', (req,res)=> {
    res.send('testt')
}) */
//first route post
//post
router.post("/add",async(req, res)=>{
    const {name, email, phone}= req.body
    try{
        const newContact= new Contact({name, email, phone})
        const contact= await newContact.save()
        res.send({msg:"contact added", contact})

    }
    catch(error){
        console.log(error)

    }
} )

// get all contacts
router.get('/', async(req,res)=> {
    try{
       const contacts=await Contact.find();
       res.send({msg: 'data fetched', contacts})
    }
    catch(error) {
      console.log(error)
    }
})

//delete contact
router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;

    try {
        const contact = await Contact.findOneAndDelete({_id:id});


            res.send({ msg: "Contact deleted successfully", contact });
        } 
           
    
     catch (error) {
        console.log(error);
       
    }
});

//Edit

router.put('/edit/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        const contact = await Contact.findOneAndUpdate({_id:id},{$set:req.body})
        res.send({msg:" Contact Updated",contact})
    }
    catch(error) {
        console.log(error)

    }

})

module.exports=router;