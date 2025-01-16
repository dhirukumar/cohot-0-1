const express=require("express");
const app=express();
const signup=require("./userrout")
const signin=require("./userrout")
const update=require("./userrout")
const find=require("./userrout")
const balance=require("./accountrout")
const transfer=require("./accountrout")
const cors=require("cors")
app.use(cors());
app.use(express.json())
app.use("/api/v1/user",signup);
app.use("/api/v1/user",signin)
app.use("/api/v1/user",update)
app.use("/api/v1/user",find)
app.use("/api/v1/account",balance)
app.use("/api/v1/account",transfer)
app.listen(3000,function(){
    console.log("hosted on 3000")
})
