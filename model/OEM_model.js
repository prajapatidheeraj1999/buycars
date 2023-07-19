const mongoose=require("mongoose")

const OEM_Schema=mongoose.Schema({
   model_of_name:String,
   model_of_year:Number,
   price:Number,
   color:String,
   milage:Number,
   power:Number,
   max_speed:Number
})

const OEM_modale=mongoose.model("OEM_data",OEM_Schema)

module.exports={OEM_modale}