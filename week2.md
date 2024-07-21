# lec 1

//express and body-parser there are two mwthode for call body

//we canuse body-parser module enable us to pass incoming requset bodies in middleware.express.js server need to know what type of data you are sending over the network so it know how to parse it



//this is full fledg of http

//in terminal:-npm init -y

//in terminal:-npm install express

// let express=require("express");

// let app=express();

// app.get("/",(req,res)=>{

//     console.log(req.body);

//     res.send("ok bey dhiru")

// })

// app.listen(3001,()=>{

//     console.log(`sit wiil be lounch on $(port) `)

// })




//this code helpe to bulde the HTTP request by the help of express for run express you need express in that file command in the following

//1.)npm init -y

//2.)npm install express

// const express=require("express")

// let app=express();

// port=3000;

// Middleware to parse JSON bodies

// app.use(express.json());//if you want to run req.body then you define this line and frest you run the code and then go to postman and sen the body

// app.post("/",(req,res)=>{  //before / you can put your port number and when you post this than you can not get anything on brouse for that you should change the post with get

 //" "inside this you can put your url name that you can use after your port number in sarch bar
 
 //   console.log(req.body);//by the help of you get body from postman for which you run this code and then sen the body from postman otherwise it shoes undifine
 
//   console.log(req.headers);//it gives the header of localhost and also give the headers that we fix in postman headers section

// res.send('<b>hey dhiru<b>') //you need to comment out this line to run below line
    
// res.send({

   //     name:'dhiru-kummar',

 //     age:22
    
    

 // })

 
// })

// app.listen(port,()=>{

//     console.log(`HTTP has been sent on ${port}`)//$ is used to print port number without geting out from string

// })

/*methods:-


1.)get is used to only send the response.

2.)post is used to take the input from browser and then send the response like chatGpt

*/



//you can also do this in simplest way to do http request

//for downlode bodyparser:-npm install bodyparser

// const express=require("express");

// const app=express();

// const port=3000 //by the help of this code you can change the port number in terminal and port wiil be change with the help of:-export PORT=port number

// const bodyparser=require("body-parser")

// app.use(express.json())//you can also call body by the help of bodyparser

// app.get("/",(req,res)=>{//only get can call on browesr and / dose not do anything you can put directly port number like localhost:3000

//   const message=req.body.message; //this is for you get particular body like.message that can avilabel in body and also many things
//   console.log(message)


   //    console.log(req.body)
   
//     res.send("hellow dhiru") //json and send do not same things because when you use send so it simpely send the message and when we use json then it return string of message

// })

// app.listen(port)




// const express = require("express");

// const app = express();

// const port = process.env.PORT || 3000; // This allows changing the port number via environment variable

// Middleware setup to parse JSON request bodies

// app.use(express.json());


// Route handler for the root endpoint "/"

// app.get("/", (req, res) => {

 // Here, req is the request object and res is the response object

//     res.send("hey Dhiru singh...."); // Sending a simple text response

//     console.log(req.query);//this query gives you the worde in your url after?in form of object

//     console.log(req.body7)

// });

// Start the server and listen on the specified port

// app.listen(port, () => {

//     console.log(`Server is running on port ${port}`);

// });


# lec2

:)about terminla:-terminal is nothiongs but another way to hendel your computer common people use GUI(graphical user interface) but pro coder use terminal

1.)pwd (print working directory):-it gives you where yoyu are now

     pwd

2.)cd (change directory):-it help you to change the directory

    cd (name of file or anythings wher you want to go)

3.)if you want to come back then 

      cd ..(back before you now if you want or back then again cd ..)

4.)when you onto your desktop by cd desktop and you want to see all file avilabel on desktop simpely tpye

      ls (list )

5.)if you want to make any director(folder)

    mkdir (folder nmae you want to make) (mkdir means make directory)

6.)if you want to make file in any folder then

      touch (file name)

7.)when you make the file inside folder and you want to see what written in file then

    cat (file name) (cat means contant of file)

8.)how to edite the file from terminal

    vi (file name) (vi means vim)
at right know you inside your file editor you need to type (i) for inserte in file

     i
after making changes you need to get out from file for that

     esc
     :wq!
and then you get out from file and you can see your changes in by

    cat (file name) (cat means contant)

9.)how to move file from one place to another file

     mv (file you want to move) (file name you want to move) (mv means move)

10.)how to copy file one folder to another folder :-this only work for copy file from one folder to another folder 

    cp (name of folder wher you want to copy) (file name you want to copy)


11.)if you want to copy folder to another folder (cp means copy)

     cp -r (folder name you want to move ) (folder name you want to copy the folder)

12.)for delete file (rm means remove)

      rm (file name)

13.)if you put (node) in terminal then you can get into (like editor) and you can run code in terminal

        node

14.)for further help in exit or anything then

     .help
     .exit

15.)npm (node package manager) by the help of this you can install external liberary like:-express,bodyparserand,fs (filesystem)

      npm install (any library you want to downlode)































