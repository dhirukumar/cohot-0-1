"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//hover on variabe,function or any of then it show there type or ts also infer the type for us
let x = 101;
// x="dhiru"
console.log(x);
function ok(firestname) {
    console.log("hellow " + firestname);
}
ok("dhiru");
//ts also infer the type a+b also a number if you not tell that ():number the ts itself infer that this is number you can check by hover on that 
function sum(a, b) {
    // console.log(a+b)
    return a + b;
}
const val = sum(2, 3);
console.log(val);
//in this case it infer the type is boll 
function age(agee) {
    if (agee > 18) {
        // console.log("you age is more then 18")
        return true;
    }
    else {
        // console.log("you are below
        return false;
    }
}
console.log(age(20));
//Create a function that takes another function as input, and runs it after 1 second. 
// function op{return "bjbjsbjs"}
let op = () => { return "njnjsnsjsjn"; };
//void means the function does not return any values 
function oo(pp) {
    setTimeout(() => {
        console.log(op()); //you need to tell this is function always inside console.log
    }, 1000);
}
oo(op);
function islegal(agee) {
    if (agee.age > 18) {
        console.log("legal");
    }
    else {
        console.log("not legal");
    }
}
islegal({
    firestname: "dhiru",
    lastname: "kumar",
    age: 20
});
//you can do by this or try type to declear the the type of prameter
function oj(oo) {
    console.log(oo);
}
oj(1);
oj("jnjn");
function rp(kp) {
    console.log(kp);
}
rp("knsn");
rp(243);
//use this combine object in this maketeam
const maketeam = {
    name: "dhiru",
    password: 1324,
    username: "dk",
    animal: "sssss"
};
const dd = {
    username: "dk",
    animal: "sssss"
};
const hh = ["mkmd", "kndndk"]; //how you use arr in ts
console.log(hh);
function hg(ij) {
    console.log(ij);
}
// Call the function
hg([1, 2, 3, 4, 5, "nksns", "msmsm"]);
//finding the higest number in arr wit ts arr
function dt(dd) {
    let max = 0;
    for (let i = 0; i < dd.length; i++) {
        dd[i] > max;
        max = dd[i];
    }
    return console.log(max);
}
dt([1, 2, 3, 4, 6, 8]);
//enum is basically did more human redable syntax
//  Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["right"] = 2] = "right";
    direction[direction["left"] = 3] = "left"; //3
})(direction || (direction = {}));
function ft(keyPressed) {
    if (keyPressed == direction.up) {
        return;
    }
}
ft(direction.up);
console.log(direction.up);
console.log(direction.right); //this will return 2 because right is on 2rd place in enum
console.log(direction.down); //this will return 1 because down is on 1rd place in enum
//anothe enum
var ddirection;
(function (ddirection) {
    ddirection["up"] = "up";
    ddirection["down"] = "down";
    ddirection["right"] = "right";
    ddirection["left"] = "left"; //"left"
})(ddirection || (ddirection = {}));
function fe(keyPressed) {
    if (keyPressed == ddirection.up) {
        return;
    }
}
fe(ddirection.up);
console.log(ddirection.up);
console.log(ddirection.down);
console.log(ddirection.right);
//the basic use of enum is in express when you make a rout
const express = require("express");
const app = express();
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
app.get("/", (req, res) => {
    if (!req.query.userId) {
        return res.status(ResponseStatus.Error).json({ message: "userId is required" }); //here is more human redable when error occure in our code base
    }
    res.status(ResponseStatus.Success).json({ message: "Request successful" });
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// const df:ds=["jijsis","knsknsn"]
// console.log(df[0].toUpperCase) //this will not return the uppercase because it say the df type id number or string so number is not be in uppercase while i pass ony string typescript not grap that this is string
function gf(dd) {
    return dd;
}
let df = gf(["njndjd", "njnsjns"]); //with genirec function you will see that you make a two function one is string ang one in number function with help of just one functio
const dw = gf([1, 2, 34, 4]);
console.log(df[1].toUpperCase());
console.log(dw[1]);
