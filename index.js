//import mongoos lib
const mongoose=require("mongoose");

//connet mongoos
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