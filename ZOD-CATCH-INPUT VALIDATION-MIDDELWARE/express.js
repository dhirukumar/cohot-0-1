const express=require("express");
const app=express();
const port=2000;

app.use(express.json());

app.post("/no-of-kidney",(req,res)=>{
   const kidney=req.body.kidney;  //{"kidney": ["left", "right"]} put this in the body
   if(!kidney){
    res.send("wrong input")
   }
   else{
   const nokidney=kidney.length;
   res.json({
    mss:"number of kidney is " +nokidney
   })
}
})

//global catch when the user type any type of wrong input then is middelwere is called it contain 4 parametar and all of time it define at the end of your code 
let errorcount=0;
app.use((err,req,res,next)=>{
    errorcount++;
    console.log(errorcount);
    res.send("something wrong with your input")
})

app.listen(port,function(){
    console.log(`sit is hosted on ${port}`)
});