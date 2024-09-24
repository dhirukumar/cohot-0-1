const express=require("express");
const app=express();
const port=3000;
app.use(express.json());

function ridemiddelware(req,res,next){
    const age=req.body.age;
    if(age>=14){
        next();
    }
    else{
        res.json("you are not eligibal for take ride1")
    }
}
app.get("/ride1",ridemiddelware,(req,res)=>{
    res.json({
        msss:"you are eligibal for ride1",
        mss:"you have book a ride",
        // msss:"ap" //if you give the same name then it prints the last one masss
    })
})
app.listen(port,function(){
    console.log(`sit is hosted on port ${port}`)
})