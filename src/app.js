const express = require("express")
const app = express()
app.use("/",(req,res)=>{
    res.send("Namastee")
});
app.use("/hello",(req,res)=>{
    res.send("helloo")
})
app.listen(3333,()=>{
    console.log("Server Started Successfullyy")
})