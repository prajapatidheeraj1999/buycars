const express = require("express");
const { dealer_modale } = require("../model/dealer_model");
const dealer_route = express.Router();
const {OEM_modale}=require("../model/OEM_model")

dealer_route.post("/add", async (req, res) => {
  let data = req.body;

  try {
    console.log(data);

    let add = await dealer_modale(data);
    await add.save();
    res.send({ mas: "data has been added" });
  } catch (error) {
    res.send({ mas: "something is wrong" });
  }
});

dealer_route.get("/get", async (req, res) => {
    let {userID}=req.body
   console.log(userID)
  try {
    let data = await dealer_modale.aggregate([
        { $match : { userID : userID }},
        { $lookup : {
            from : 'oem_datas',
            localField : 'model_of_name',
            foreignField : 'model_of_name',
            as : 'oemdata'
        } }
    ])
    res.send(data)
  } catch (error) {

    res.send("error someting is wrong")
  }
});

module.exports = { dealer_route };
