const express=require("express");

const app=express();

// app.get("/profile",(req,res)=>{
    // const {username} =req.query;
    // res.send("profile page of "+" "+username)
// })
// app.get("/profile",(req,res)=>{
    // const {username,age,state} =req.query;
    // res.send("profile page of "+" "+username+ " "+age+" "+state)
// })
let userData=[{
    id:1,
    Name:"Vibhu",
    address:"haryana"
},
{
    id:2,
    Name:"sneha",
    address:"jammu and kashmir"
},
{
    id:3,
    Name:"muskan",
    address:"pune"
}]

app.get("/allusers",(req,res)=>{
    res.send(userData)
})

app.get("/getuserbyId",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            res.send(userData[i])
        }
    }
    res.send("user not found")
})
app.get("/deleteuser", (req, res) => {
    let { id } = req.query;
    for(let i=0; i<userData.length; i++){
        if(userData[i].id==id){
            userData.splice(i,1);
            return res.send("user deleted...")
        }
    }
    res.send("No user found...");
    
});

app.get("/adduser", (req, res) => {
    let { id, Name, address } = req.query;
    userData.push({ id, Name, address });
    res.send("User added successfully");
});

app.listen(5646,()=>{
    console.log("server started");
});