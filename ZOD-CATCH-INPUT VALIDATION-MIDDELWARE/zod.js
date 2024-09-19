const express=require("express");
//when you pass zod validation then don't pass any exception handeling manually in your code just put zod validation it gives you all the error
const z=require("zod");//it is use for input validation

const app=express();
const port=2000;
const schema=z.array(z.number())
/*if you want to check user input like that
co{
    email:z.string(),
    username:z.string(),
    password:atlist 8 latter,
    country:"ind","usa" (only two country )
}*/

// const schema={
//     email:z.string(),
//     password:z.string(),
//     country:z.literal("idn").or(z.literal("usa")),
//     kidney:z.array(z.number())
// }

app.use(express.json());

app.post("/no-of-kidney",(req,res)=>{
   const kidney=req.body.kidney;  //{"kidney": [1,2]} put this in the body it is a array
  const response=schema.safeParse(kidney);
  let pp=kidney.length;
//    if(!kidney){
//     res.send("wrong input")
//    }
//    else{
//    const nokidney=kidney.length;

if(!response.success){
    res.status(411).json({
        mss:"invalid information"
    })
}
else{
   res.status(400).json({
    response,
    pp
    // mss:response.error.errors //it gives you short and stright error
    // "number of kidney is " +nokidney
})
}
// }
})

//global catch when the user type any type of wrong input then is middelwere is called it contain 4 parametar and all of time it define at the end of your code 
// let errorcount=0;
// app.use((err,req,res,next)=>{
    // errorcount++;
    // console.log(errorcount);
//     res.send("something wrong with your input")
// })

app.listen(port,function(){
    console.log(`sit is hosted on ${port}`)
});