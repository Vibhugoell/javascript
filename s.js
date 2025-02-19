const express=require("express");
const app=express();

//route to get signup page 
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/reg.html");
})

app.listen(4545,()=>{
    console.log("server started..");
})