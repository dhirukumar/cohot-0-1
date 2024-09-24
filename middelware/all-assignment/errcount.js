const express=require("express");
const app=express();
const port=2000;

app.use(express.json());


app.get('/user', (req, res) => {
    //this is error
    let a;
    console.log(a.length);

    res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user',error:errcount });
});
//global catch always put below code
var errcount=0;
app.use((err,req,res,next)=>{
    errcount++;
   console.log(errcount);
    res.json({mss:"something wrong with your input"});
})
app.listen(port,()=>{console.log(`sit is hosted on port ${port}`)})
