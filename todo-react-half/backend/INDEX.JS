const express=require("express");
const app=express();
const port=3030;
app.use(express.json());
const {todoo}=require("./mongo.js")
const { todoshema, updateshema } = require("./type");//if file is outside the folder then we use ../ and file is inside the folder then we use ./

const cors=require("cors")
app.use(cors());

// POST route to create a todo
app.post('/todo', async (req, res) => {
  const { title, discreption } = req.body;

  // Validate input (using Zod or another validation tool if applicable)
  const parseTodo = todoshema.safeParse({ title, discreption });
  if (!parseTodo.success) {
    return res.status(400).json({
      msg: 'You are not sending the todo in the right format',
      errors: parseTodo.error.errors,
    });
  }

  try {
    // Create the todo in the database
    const todoCreate = await todoo.create({
      title,
      discreption,
      completed: false,
    });

    // Respond with the created todo
    res.json({
      msg: 'Todo created successfully',
      data: todoCreate,
    });
  } catch (err) {
    // Handle errors
    res.status(500).json({
      msg: 'Failed to create todo',
      error: err.message,
    });
  }
});



app.get("/todos",async function(req,res){ //in every case when you want your data it might be data center in other country so it gives you a promise so in this case you need to give async-await to fetch the data
     const alltodo= await todoo.find({}); //{} this bracket give you the all object from database
     res.json({alltodo})
})

app.put("/completed",async function(req,res){ //async-await is must in this case till the complete is true or otherwise it gives you promise
     const updatee=req.body;
     const updateparse=updateshema.safeParse(updatee)
     if(!updateparse.success){
        res.status(404).json({
            msg:"you are not sending the rigth id"
        })
    }
await todoo.updateOne({_id:req.body.id},{$set:{ completed: true } } )

        res.json({
            msge:"update is completed",
        
        })
    
})


app.listen(port,function(){
    console.log(`sit is hosted on port ${port}`)
})