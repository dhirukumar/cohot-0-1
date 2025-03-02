// 1.)

import { ConnectionStates } from "mongoose"

interface op {
    name:string,
    age:number
}

function sumofage(a:op,b:op){
    return a.age+b.age
}

const result=sumofage({
name:"dhiru",
age:1
},{
name:"knkd",
age:5
})
console.log(result)


// 2.)when you want to update not full interface object but only few then how you will do this with bad manner

interface dp {
    name:string,
    age:number,
    email:string,
    phoneno:number
}
 
function update(name:dp,email:dp){
//your mongo logic to update
}

// 3.)in this upper logic when you have 100 of object and you want to update only 50 then in this case you need to write all this 50 object and this is tough to do this for that (pick)API come into figure
interface pp {
    name:string,
    age:number,
    email:string,
    phoneno:number
}

type item=Pick<pp,"name"|"email">//pick will provide you to choose any object 

function hu(updateitem:item){
//your mongo logic to update
}


// 4.)In real world you will see that when some one want to update it no need to update all three things if user want to update only one or two thing then he can for that we need to make this update item as optional(/?)for that we can use this partial API


interface ed {
    name:string,
    age:number,
    email:string,
    phoneno:number
}

type itemm=Pick<ed,"name"|"email">//pick will provide you to choose any object 
type optional=Partial<itemm>//this will change change this item into optional if you want to see then hower on optional and you ? 
function huu(updateitem:optional){
//your mongo logic to update
}

//problem:-why a arr is changed when I set A as const

type ii={name:string,age:number}
const hi:ii={name:"nknkd",age:90}//this is also const but why i am able to change
hi.name="knknd"

console.log(hi)
const a=[1,2,3,4]
a[0]=3
console.log(a[0])//gives you3

// 5.)Readonly
type dd={
   readonly name:string,
   readonly age:number
}
const gh:dd={name:"knmknd",age:80}
// gh.name="knknns" this is not working because this object has only readonly property

const b: readonly number[] = [1, 23, 3, 4, 3];

// b[0]=3this will not work

// 6.)record gives you to use object inside object in this you will see bad way to do this

type rt={name:string,
    age:number
}
type ff={
   [key:string]:rt //this key is unique for all like
}

function gt(hj:ff){
  console.log(hj)
}

gt({"uniquekey":{name:"lmkmd",
age:80}})

//you can use Record or Map any one for key-value pare given below
//how you can do this with help of record
type cf = {
    name: string;
    age: number;
  };
  
  
  type ee = Record<string, cf>; //in record the firest argument is key by default where keys are strings and values are of type 'cf'
  
  
  const obj: ee = {
    "user1": { name: "Alice", age: 30 },
    "user2": { name: "Bob", age: 25 },
  };
  
// 7.)if you have key value pare means you have key and value the you use map for this
//Map gives you all CRUD function
const vg=new Map
vg.set("key1",{name:"knkdnd",age:70})//create
vg.set("key2",{name:"knfkn",age:69})

// const resu=vg.get("key1")//read
// const df=vg.delete("key1")//delete
//update
if (vg.has("key1")) {
    vg.set("key1",{age: 290});
  }
  const resu=vg.get("key1")//read
console.log(resu)

// 8.)exclude just opposite of pick
type ui='click'|'scrool'|'mousemove'
type cd=Exclude<ui,"scrool">

function hy(dd:cd){
    console.log(dd)
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
import { z } from "zod";

// Define schema
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
});


type UserType = z.infer<typeof userSchema>;//if you want to see this infre work or not then hower on UserType and you will see that this infer extract all the property from shema
const user: UserType = { name: "Alice", email: "alice@example.com", age: 25 };


console.log(user); // Logs: { name: 'Alice', email: 'alice@example.com', age: 25 }
console.log(JSON.stringify(user, null, 2)); // Pretty print JSON
