const express=require("express");
const app=express();

app.use(express.urlencoded({extended:true}))
let userdata=[]

//route to get signup page 
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/reg.html");
})

app.post("/adduser", (req,res)=>{
    let{username, useremail,userpassword}=req.body;
    console.log(username,useremail,userpassword);
    let newuser={
        name:username,
        email:useremail,
        password:userpassword
    }
    userdata.push(newuser);
    res.send(userdata);
})
app.listen(4545,()=>{
    console.log("server started..");
})
