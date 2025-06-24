const express = require("express")
const app = express()
app.get("/info",(req,res)=>{
    res.send({
        firstName:"Dvraj",
        lastName:"Makwana"
    })
})
app.post("/info",(req,res)=>{
    res.send("Data fetched succussfullyy")
})
app.delete("/info",(req,res)=>{
    res.send("Deleted the data successfully")
})
app.listen(4444,()=>{
    console.log("Server Started Successfullyy")
})