

//if you want to know more about zod then go to there sit
const z = require("zod"); // Zod for input validation

//validate an input of arr of number with atlist 3 input


//ex-1
// function validateinput(arr){
//    const schemaa=z.array(z.number()).min(3);
//     const schema=z.array(z.number());
//      const ok=schema.safeParse(arr);
//      const op=schemaa.safeParse(arr);
//     if(!op.success){
//       console.log("password must contain 3 number")
//     }
//      if(!op.success && !ok.success){
//         console.log("invalid information")
       
//      } 
//    if(!ok.success){
//       console.log("invalid input")
//      }
//      else{
//         console.log(ok)
//      }
// }  
// validateinput([1,2," "])




//ex-2
function off(object){
   const pp=z.object({
      email:z.string().email(),
      password:z.string().min(5)
   })
   const tt=pp.safeParse(object)
   console.log(tt)
}

off({
   email:"dhiru952006gmail.com",
   password:"dhiru"
})



//ZOD validation 
// z.string().max(5);
// z.string().min(5);
// z.string().length(5);
// z.string().email();
// z.string().url();
// z.string().emoji();
// z.string().uuid();
// z.string().nanoid();
// z.string().cuid();
// z.string().cuid2();
// z.string().ulid();
// z.string().regex(regex);
// z.string().includes(string);
// z.string().startsWith(string);
// z.string().endsWith(string);
// z.string().datetime(); // ISO 8601; by default only `Z` timezone allowed
// z.string().ip(); // defaults to allow both IPv4 and IPv6
