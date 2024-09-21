//import mongoos lib and get into this file
const mongoose=require("mongoose");


//FIRST YOU NEED TO GO MANGO ATLAS AND MAKE YOUR ACCOUNT ON MONGODB AFTER THAT MAKE ONE CLUSTER AND AFTER THAT DOWNLODE MONGOBD CAMPUS FOR HANDEL YOUR CLUSTER AFTER MAKEING YOUR OWN CLUSTE YOU WILL GET A LINK IN THAT LINK IN PLACE OF PASSWORD PUT YOUR PASSWORD AND THEN PUT THIS LINK IN CROME INGEN AND IT SHOW THE OPEN YOUR MONGOBD CAMPUS OPEN IT AND DONE YOUR CLUSTER CONNECT TO YOUR MONGO CAMPUS AND IF YOU WANT TO CONNECT YOUE MONGO THEN DO LIKE IN THIS FOLLOWING AND THIS LINK IS SAME AS YOU PUT IN CROME 
//and yes give 0.0.0.0/0 in network access to access the database everyone
mongoose.connect("mongodb+srv://dhiru952006:SAhj4WSkD0zQEYVQ@cluster0.r07tb.mongodb.net/"),{
//     useNewUrlParser: true, 
//   useUnifiedTopology: true 
}

//define schema

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Userschema=new mongoose.Schema({
    //schema of user define here
    username:String,
    password:String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId, // 'ObjectId' should be capitalized
        ref: 'Course'
    }],

});

const courseschema=new mongoose.Schema({
    title: String,
    description: String, // Fixed the typo from 'discreption' to 'description'
    imageLink: String,   // Fixed the typo from 'imagelinnk' to 'imageLink'
    price: Number 
});


// make the model for all schema define above
const Admin = mongoose.model('Admin', AdminSchema);
const User=mongoose.model('usre',Userschema)
const course=mongoose.model('course',courseschema)

//export all the model for use in other file
module.exports=({
    Admin,
    User,
    course

})
