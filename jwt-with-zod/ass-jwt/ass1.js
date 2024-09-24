const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const z=require("zod");
const jwtpassword="1234"
const port=3000;

app.use(express.json());

const usernameshema=z.string().email();
const passwordshema=z.string().min(5);

app.post("/signup",(req,res)=>{
   const username=req.body.username;
   const password=req.body.password;
   const a=usernameshema.safeParse(username);
   const b=passwordshema.safeParse(password);
//it log show in terminal
console.log(a,b);
//this show in postman console
if(!a.success){
    res.json("you username is not valid")
}
if(!b.success){
    res.json("your password contain min 5 number")
}
if(!a.success&&!b.success){
    res.json({
        msg:"your password and username both are wrong"
    })
}
const token=jwt.sign({username:username,password:password},jwtpassword)
res.json({
 token
})

  
})


app.get("/signin",(req,res)=>{
    const authorization=req.headers.authorization;
    const varifyyy=jwt.verify(authorization,jwtpassword);
    const usenamedecode=varifyyy.username;
    const passworddecode=varifyyy.password;
  

    //make a decode function to decode jwt token
    const decode=jwt.decode(authorization);
    

    res.json({
        usenamedecode,
        passworddecode,
        decode

    })

})
app.listen(port,function(){
    console.log(`sit is hosted on port ${port}`)
})