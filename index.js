const express=require("express")
const cors=require("cors")
const {connect}=require("./db")
const {userouters}=require("./route/users_route")
const {OEM_route}=require("./route/OEM_route")
const {dealer_route}=require("./route/dealer_route")
const {varify}=require("./middelware/varify")
const app=express()
app.use(cors())
app.use(express.json())

app.use("/users",userouters)

app.use("/oem",OEM_route)

app.use(varify)

app.use("/dealer",dealer_route)

app.listen(8080,async()=>{

    try{
        await connect
        console.log("connection is stablesh port no 8080")


    }catch(error)
    {
        console.log("something is wrong")
    }

})