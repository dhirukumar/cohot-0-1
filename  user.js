const { User,course } = require("../index");
// const usermiddelware=require("../middleware/user");
const express = require("express");
const UserMiddleware = require("../middleware/user");
// const port=3001;

//app is use as direct express
const app=express();

//parse the json 
app.use(express.json());

//router for hit the rout
const router = express.Router();

router.post("/signup",async function (req,res){
    const username=req.body.username;
    const password=req.body.password;

try{

const newuser= await User.create({
    username:username,
    password:password
})


 // Respond with success message
 res.json({
    msg: "user signed up successfully",
    User:newuser,
  });
 }
 // Handle any errors during user creation
catch(error){res.status(500).json({
        msg: "Error signing up user",
        error: error.message,
      });

    }
})
router.get("/course",async(req,res)=>{
const allcourse=await course.find({});
res.json({
    response:allcourse
})
})
router.post("/course/:courseId",UserMiddleware,async(req,res)=>{
//logic for push the purchesed course in user block
const courseId=req.params.courseId;
const username=req.headers.username;
  await User.updateOne(
    { username: username },
    { $addToSet: { purchasedCourses: courseId } }
);
res.json({
    msg:"purches complete"
})
})


//in this response in postman not show so check what the problem
router.get("/purchesedcourses",UserMiddleware,async(req,res)=>{
 try{await User.findOne({
    username:req.headers.username,
  })
  // console.log(User.purchasedCourses);
  const ab=await course.find({
    _id:{
      "$in":User.purchasedCourses,
    }
  })
  res.json({
  response:ab,
  })
}
catch(error){
  res.status(404).json({
    msg:"error in show published course"
  })
}
})
// Use the router for handling routes
app.use("/user", router);

app.listen(3001, () => {
    console.log(`App is listening on port 3001`);
  });



module.exports=router;