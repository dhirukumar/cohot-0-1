"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser")); //this cookies-parser parse the long cookies get from browser 
const jwtpassword = "12345678";
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //do db varification
    const token = jsonwebtoken_1.default.sign({ email }, jwtpassword);
    res.cookie('token', token); //this cookie method set the set-cookies in header automatically
    res.send("Logged in!");
});
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, jwtpassword);
    // Get email of the user from the database
    res.send({
        userId: decoded.email
    });
});
app.post("/logout", (req, res) => {
    // you can send req to token a empty string this two methods are same
    res.cookie('token', '');
    res.json({
        message: "Logged out!"
    });
});
//this is for backenf html file 
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../src/index.html"));
});
app.listen(3000), () => {
    console.log("Server started on http://localhost:3000");
};
