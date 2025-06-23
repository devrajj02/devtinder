const express = require("express")
const app = express()
app.use("/",(req,res)=>{
    res.send("Namastee")
});
app.listen(3333,()=>{
    console.log("Server Started Successfullyy")
})