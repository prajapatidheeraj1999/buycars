const mongoose=require("mongoose")

const dealer_Schema=mongoose.Schema({
   model_of_name:String,
   odometer:Number,
   mejor_scratches:Number,
   original_pain:String,
   number_of_accident_report:Number,
   number_previous_buyers:Number,
   registration_place:String,
   userID:String
})

const dealer_modale=mongoose.model("dealer_data",dealer_Schema)

module.exports={dealer_modale}