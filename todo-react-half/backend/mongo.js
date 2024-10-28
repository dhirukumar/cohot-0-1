const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://dhiru952006:SAhj4WSkD0zQEYVQ@cluster0.r07tb.mongodb.net/tododata")

const shema=new mongoose.Schema({
    title:String,
    discreption:String,
    completed:Boolean
    
})

const todoo=mongoose.model('todo',shema)

module.exports={todoo};