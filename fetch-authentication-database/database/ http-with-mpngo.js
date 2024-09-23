const express=require("express");
const app=express();
const mongoose=require("mongoose");
port=3000;
const jwt=require("jsonwebtoken");
const jwtpassword="1234"
 //after the .net/ you put any name for same name a databade is created
mongoose.connect("mongodb+srv://dhiru952006:SAhj4WSkD0zQEYVQ@cluster0.r07tb.mongodb.net/authinticaion");

app.use(express.json());

//this is shema for user
const usershema=new mongoose.Schema({
    username:"string",
    password:"string",
    name:"string"
})

//this is model for user in which  the 1st parameater is collection name and the 2nd parameater is shema for user that we define
const user=mongoose.model("alluser",usershema) //this alluser name by this name a collection (sub-group of database is created)
 
app.post("/signup",async function(req,res){
 const username=req.body.username;
 const password=req.body.password;
 const name=req.body.name;



 //mongoose have this type of function that user use most of times
 //CRUD=CREATE,READ,UPDATE,DELETE
    // Check if user already exists
    const existsUser = await user.findOne({ username });
    if (existsUser) {
      return res.status(400).json({ mss: "User already exists" });
    
    }
    // Create new user
    const token=jwt.sign({username:username,name:name},jwtpassword);
    
    const userr=await user.create({ username, password, name });
    res.json({ token,mss: "User created successfully" });
    
});

app.get("/signin",function(req,res){
    const mytoken=req.headers.authorization;
    const decode = jwt.verify(mytoken, jwtpassword);
    const username=decode.username;
    const name=decode.name;
    res.json({
        username,
        name
    })
})


app.listen(port,function(){
    console.log(`sit is hosted on port ${port}`)
})