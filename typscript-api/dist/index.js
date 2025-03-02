"use strict";
// 1.)
Object.defineProperty(exports, "__esModule", { value: true });
function sumofage(a, b) {
    return a.age + b.age;
}
const result = sumofage({
    name: "dhiru",
    age: 1
}, {
    name: "knkd",
    age: 5
});
console.log(result);
function update(name, email) {
    //your mongo logic to update
}
function hu(updateitem) {
    //your mongo logic to update
}
function huu(updateitem) {
    //your mongo logic to update
}
const hi = { name: "nknkd", age: 90 }; //this is also const but why i am able to change
hi.name = "knknd";
console.log(hi);
const a = [1, 2, 3, 4];
a[0] = 3;
console.log(a[0]); //gives you3
const gh = { name: "knmknd", age: 80 };
// gh.name="knknns" this is not working because this object has only readonly property
const b = [1, 23, 3, 4, 3];
function gt(hj) {
    console.log(hj);
}
gt({ "uniquekey": { name: "lmkmd",
        age: 80 } });
const obj = {
    "user1": { name: "Alice", age: 30 },
    "user2": { name: "Bob", age: 25 },
};
// 7.)if you have key value pare means you have key and value the you use map for this
//Map gives you all CRUD function
const vg = new Map;
vg.set("key1", { name: "knkdnd", age: 70 }); //create
vg.set("key2", { name: "knfkn", age: 69 });
// const resu=vg.get("key1")//read
// const df=vg.delete("key1")//delete
//update
if (vg.has("key1")) {
    vg.set("key1", { age: 290 });
}
const resu = vg.get("key1"); //read
console.log(resu);
function hy(dd) {
    console.log(dd);
}
// hy('scrool')//show error bc scrool is deleted from ui
//zod in typescrept without {infer} it look bad because we need to type 
// import express, { Request, Response } from "express";
// import { z } from "zod";
// const app = express();
// app.use(express.json()); // Middleware to parse JSON requests
// const userSchema = z.object({
//   name: z.string().min(3, "Name must be at least 3 characters long"),
//   email: z.string().email("Invalid email format"),
//   age: z.number().min(18, "Age must be at least 18"),
// });
// app.post("/user", (req:any,res:any) => {
//   const parsedData = userSchema.safeParse(req.body);
//   if (!parsedData.success) {
//     return res.status(400).json({ error: parsedData.error.format() });
//   }
//   type withoutinfer={ //we need to define again this propety for elimenate this we need zod.infer
//     name:string,
//     email:string,
//     age:number
//   }
//   const user:withoutinfer = parsedData.data; 
//   res.json({ message: "User created", user });
// });
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
//with using zod infer
const zod_1 = require("zod");
// Define schema
const userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    age: zod_1.z.number(),
});
const user = { name: "Alice", email: "alice@example.com", age: 25 };
console.log(user); // Logs: { name: 'Alice', email: 'alice@example.com', age: 25 }
console.log(JSON.stringify(user, null, 2)); // Pretty print JSON
