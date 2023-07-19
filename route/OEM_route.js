const express=require("express")
const {OEM_modale}=require("../model/OEM_model")
const OEM_route=express.Router()

OEM_route.post("/add",async(req,res)=>{

    let data=req.body

    try{
        console.log(data)

        let add=await OEM_modale(data)
        await add.save()
        res.send({"mas":"data has been added"})

    }catch(error)
    {
        res.send({"mas":"something is wrong"})


    }

    
})
module.exports={OEM_route}
