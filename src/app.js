const express = require("express")
const app = express()
app.use("/user",(req,res,next)=>{
    res.send("1st handler")
    console.log("1st handler created")
    next()
    
},
(req,res,next)=>{
    res.send("2nd Handler")
    console.log("2nd handler created")
})
app.listen(4444,()=>{
    console.log("Server Started Successfullyy")
})