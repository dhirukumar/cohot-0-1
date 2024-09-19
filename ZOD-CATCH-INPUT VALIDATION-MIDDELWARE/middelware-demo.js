const express=require("express");
const app=express();
const port=3001;

// Use express.json() to parse incoming JSON requests
app.use(express.json());

//one more middelware if help to calculate number of requests send on this port
let numberofRequests=0;
function calculateRequests(req,res,next){
numberofRequests++;
console.log(numberofRequests++)
next();
}
 //in middelware always put third parametar is next after authentication
 function middleware(req,res,next){
const username=req.body.username; //in this place you can also use (req.query.username) by giveing ? at end of url or (req.headers.username) by put username and password in headers or (req.prams.username) by giveing /: at end of url
const password=req.body.password;
if(username=="dhiru" && password=="pass"){
    next();
}
else{
    res.send("wrong username and password")
}
  }

//** app.use(put any middelware it implay on every request after this line ) thats why we write the json parser at top to parse all json file **/

app.use(calculateRequests) //this line of code put this middelware in every request

 app.post("/op",middleware,(req,res)=>{
  try {
    res.json({
        mss:"you are wright person with username and password"
    })
  } catch (error) {
    res.status(400).json({
        mss:"you are not wright person with username and password"
    })
  }
 })

 app.listen(port,function(){
    console.log(`your sit is hosted on port ${port}`)
 });