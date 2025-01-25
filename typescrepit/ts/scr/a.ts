import { number } from "zod";



//hover on variabe,function or any of then it show there type or ts also infer the type for us
let x:number=101;
// x="dhiru"
console.log(x)


function ok(firestname:string){ //in tsconf file if you set "noImplicitAny": false, the you not need to give the type as string  of anything the took type as any
    console.log("hellow "+firestname)
}
ok("dhiru")

//ts also infer the type a+b also a number if you not tell that ():number the ts itself infer that this is number you can check by hover on that 
function sum(a:number,b:number):number{
    // console.log(a+b)
    return a+b
}
const val=sum(2,3)
console.log(val)

//in this case it infer the type is boll 
function age(agee:number){
if(agee>18){
    // console.log("you age is more then 18")
    return true
}
else{
    // console.log("you are below
    return false
}
}
console.log(age(20))


//Create a function that takes another function as input, and runs it after 1 second. 
// function op{return "bjbjsbjs"}
let op=()=>{return "njnjsnsjsjn"}

//void means the function does not return any values 
function oo(pp:()=>string){//this pp is argument of this oo function after : you can say that pp is function by this ()=> inside ()yoou can pasa the argument of this function you call in this function

setTimeout(()=>{
    console.log(op())//you need to tell this is function always inside console.log
},1000)
} 
oo(op)


//this is how you can write a object in ts
// interface user {
// firestname:string,
// lastname:string,
// age:number,
// email?:string
// }
//this another metod of doing this
type user={
firestname:string,
lastname:string,
age:number,
email?:string
}
function islegal(agee:user){
    if(agee.age>18){
        console.log("legal")
    }
    else{
        console.log("not legal")
    }
}

islegal({
    firestname:"dhiru",
    lastname:"kumar",
    age:20
})

//you can do by this or try type to declear the the type of prameter
function oj(oo:(number|string)){
    console.log(oo)
    }
    oj(1)
    oj("jnjn")


//this is used by type method
type oo=string|number
function rp(kp:oo){
console.log(kp)
}
rp("knsn")
rp(243)

//make a object with type
type dp={
    name:string,
    password:number
}
//make a another object with interface
interface ioo {
    username:string
}
interface ui extends ioo{//in this extend ui is new object and it has all object that ioo have
    animal:string
}
//combine this both object with type
type attach=dp&ioo&ui
//use this combine object in this maketeam
const maketeam:attach={
    name:"dhiru",
    password:1324,
    username:"dk",
    animal:"sssss"
}
const dd:ui={ //i can use ioo object in this ui object because i extended this ui object with ioo object so it has all object of ioo
    username:"dk",
    animal:"sssss"
}

const hh: string[] = ["mkmd", "kndndk"]; //how you use arr in ts
console.log(hh);

function hg(ij:(string|number)[]) {
    console.log(ij);
}

// Call the function
hg([1, 2, 3, 4, 5, "nksns", "msmsm"]);

//finding the higest number in arr wit ts arr
function dt(dd:number[]){
   let max:number=0
   for(let i=0;i<dd.length;i++){
     dd[i]>max
     max=dd[i]
   }
   return console.log(max);
}
dt([1,2,3,4,6,8])


//enum is basically did more human redable syntax
//  Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.


enum direction{
   up, //0
   down, //1
   right, //2
   left //3
}

function ft(keyPressed:direction){
    if(keyPressed==direction.up){
        return
    }
}

ft(direction.up)
console.log(direction.up)
console.log(direction.right) //this will return 2 because right is on 2rd place in enum
console.log(direction.down) //this will return 1 because down is on 1rd place in enum

//anothe enum

enum ddirection{
    up="up", //"up"
    down="down", //"down"
    right="right", //"right"
    left="left" //"left"
 }

 function fe(keyPressed:ddirection){
    if(keyPressed==ddirection.up){
        return
    }
}
fe(ddirection.up)
console.log(ddirection.up)
console.log(ddirection.down)
console.log(ddirection.right)

//the basic use of enum is in express when you make a rout
const express = require("express");
const app = express();

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/", (req, res):any => {
    if (!req.query.userId) {
        return res.status(ResponseStatus.Error).json({ message: "userId is required" });//here is more human redable when error occure in our code base
    }
    res.status(ResponseStatus.Success).json({ message: "Request successful" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


//Generics are a language independent concept (exist in C++ as well)
//problen that genrics solve
type ds=(string|number)[]

// const df:ds=["jijsis","knsknsn"]
// console.log(df[0].toUpperCase) //this will not return the uppercase because it say the df type id number or string so number is not be in uppercase while i pass ony string typescript not grap that this is string

function gf<t>(dd:t[]){ //this is genirec syntax <t> t stans for type now according to your convience you can assigne any type of this function
return dd
}
let df=gf<string>(["njndjd","njnsjns"]) //with genirec function you will see that you make a two function one is string ang one in number function with help of just one functio

//if you not write <number> now ts is compatibal to know this is a numder hower on dw and you will see that
const dw=gf([1,2,34,4])
console.log(df[1].toUpperCase())
console.log(dw[1])

//new syntax to import and export
const express=require("express")//this is premitive methode
import express from "express" //this is new way to import file

//export 
//premitive way to export and import file
export ddi=1;//let this is in file ff
import {ddi} from "./ff"

//with default methos 
const ddt=1
export default ddt; //let this is in file ro
import ddt from "./ro"//you not need to {dd} just dd like import react from "react"