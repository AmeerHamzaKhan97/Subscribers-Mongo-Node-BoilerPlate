
const express = require('express');
const app = express()
const subscriber = require('./models/subscribers')


// Your code goes here

app.get("/subscribers", async(req,res)=>{
    res.send(await subscriber.find())
});

app.get("/subscribers/names",async(req,res)=>{
    res.send(
      await subscriber.find().select({
        name: true,
        subscribedChannel:true,
        _id:false
      })
    );
});

app.get("/subscribers/:id",async(req,res)=>{
    const idToSearch = req.params.id;
    try{
        const id = await subscriber.findById({_id:idToSearch})
        if(id == null){
            res.status(404).send({message:"id not found "})
        }else{
            res.send(id)
        }
    }
    catch(e){
        res.status(400).send({message:e.message})
    }
});

















module.exports = app;
