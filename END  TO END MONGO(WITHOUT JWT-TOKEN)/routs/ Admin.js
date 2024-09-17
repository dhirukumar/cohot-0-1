const express = require("express");
const AdminMiddleware = require("../middleware/admin");
const { Admin,course } = require("../index");

const app = express(); // Correctly initialize the Express app
const router = express.Router(); // Router for handling routes
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Route for admin signup
router.post("/signup",  function (req, res) {

const username = req.body.username;
const password = req.body.password;


 //in this you can use try-catch method 
  try{
    // Create a new Admin document
    const newAdmin =  Admin.create({ username, password });

    // Respond with success message
    res.json({
      msg: "Admin signed up successfully",
      admin: newAdmin,
    });
  }  catch( error) {
    // Handle any errors during Admin creation
    res.status(500).json({
      msg: "Error signing up admin",
      error: error.message,
    });
  }
});

//for run this you need to add username and password in postman header from your mongo
router.post("/course",AdminMiddleware,async(req,res)=>{
    //write course related logic
    const title=req.body.title;
    const discreption=req.body.discreption;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

   const newcourse=await course.create({
        title,
        discreption,
        imageLink,
        price
    })

res.json({
    message:"new course created ",
    courseid:newcourse._id //we use async-await for get the course id because when the course is saved in mongo after that you will get the course id
})
})

//you can get all course in your postman terminal if you send get request
router.get("/course",AdminMiddleware,async(req,res)=>{
    //all the logic you want to get
  const response=await course.find({});
  res.json({
    course:response,
  })

    }

)
// Use the router for handling routes
app.use("/admin", router);

// Start the server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

module.exports = router;

//after run this code if you will recive post request then it save to your mongo


