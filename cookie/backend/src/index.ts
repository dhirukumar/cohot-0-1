import jwt, { JwtPayload } from 'jsonwebtoken';
import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from "cookie-parser"; //this cookies-parser parse the long cookies get from browser 
const jwtpassword="12345678";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.post('/signin',(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    //do db varification
    const token = jwt.sign({ email},jwtpassword);
    res.cookie('token', token); //this cookie method set the set-cookies in header automatically
    res.send("Logged in!");
})

app.get("/user", (req,res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token,jwtpassword) as JwtPayload;
    // Get email of the user from the database
    res.send({
        userId: decoded.email
    })
});


app.post("/logout", (req,res) => {
    
    // you can send req to token a empty string this two methods are same
    res.cookie('token', '' ); 
    res.json({
        message: "Logged out!"
    })
});

//this is for backenf html file 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"))
})

app.listen(3000),()=>{
    console.log("Server started on http://localhost:3000");
};