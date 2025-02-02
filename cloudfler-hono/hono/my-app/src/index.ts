//ALL COMMAND IS WORKING IN HONO IT IS TOP OF WRANGLER IT PROVIDE YOU EVERYTHING
//hono syntex is littel bit diffrent from a real express so grab it well
// ***********
//why express not used by clodflare because cloudfler don't use (js) or (bun) run time it use (V8) run time that provide run multipal user at single node and express totally based on js run time so tha's why hono come into the figure it similer to express syntex buut littel diff
import { Hono,Next } from 'hono'
import { auth } from 'hono/utils/basic-auth';
import { string } from 'zod';

const app = new Hono()

//in context (c) if you want to send data then use c.req.header or c.req.body and many more 
//but if you want to send some data then only use c.text() or c.json({}) not c.res.json({})

// app.post("/", async (c) => { //c stands for (context)
//   console.log("Headers:", c.req.header("Authorization"));

//   console.log("Method:", c.req.method);

//     const pram=await c.req.query("id")
//     console.log("parameter: ",pram)

//     const body = await c.req.json();
//     console.log("Body received:", body);

//     return c.json({ message: "Data received"});
// });



//how you use a middewere in hono
// async function midd(c:any,next:any){
// const op=c.req.header("auth")
// if(op){
//   //your step to varify user 
//   return await next() ,console.log("you are varifyed user")
// }else{return await c.json({mess:"send the auth"})}
// }


// //second ex for doing same things as up side
// app.post('/',midd, async (c) => {
//   const body = await c.req.json()
//   console.log("body",body)
//   console.log("method",c.req.method)
//   console.log(c.req.header("auth"));
//   console.log("your prameter",c.req.query("id"));
//   return c.text('Hello Hono!')
// })


// if you want to change the website name then go wrangler.json file and change the name 
app.get("/",async(c)=>{  //if you give some name after this / then after deployment you need to put this /name in your url to see the sit or only give /
console.log("succ deployed")
  return c.html(`
  <html>
  <head>
    <title>100xDev Website</title>
  </head>
  <body style="background-color: black; color: white; text-align: center; padding: 20px;">
    <h1 style="color: cyan;">This Is 100xDev Website</h1>
    <p style="color: yellow;">You Can Ask Any Question</p>
  </body>
</html>`)
})


export default app