//in this assignment you need to count the request how many times you hit the server

const express=require("express");
const app=express();
port=3000;
app.use(express.json())
//count the req middelware
var reqcount=0;
function countmiddelware(req,res,next){
    reqcount=reqcount+1;
   next();
}
//put this middelware to every server
app.use(countmiddelware);

app.get("/user",(req,res)=>{
    res.json({
        name:"jone"
    })
})

app.post("/user",(req,res)=>{
    res.json({
        mss:"user created "
    })
})
//when you hit this server it gives you count exceed by 1 because it count itself server count 
app.get("/reqcount",(req,res)=>{
    res.json({
        reqcount
    })
})

app.listen(port,function(){
    console.log(`sit is hosted on port ${port}`)
})