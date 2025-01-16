const mongoose = require("mongoose");

// MongoDB connection
mongoose.connect("mongodb+srv://dhiru952006:8_DVBgfVE7dahQY@cluster0.r07tb.mongodb.net/paytm")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


const userSchema = new mongoose.Schema({
  username: String,
  password: String
});
const user = mongoose.model("userr",userSchema);


// Payment schema and model
const accountSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: 'user',//user need to to be account in our bank 
    required: true
  },
  balance:{
    type: Number,
    required: true
}
});
const account = mongoose.model("Account",accountSchema);

module.exports ={user,account};
