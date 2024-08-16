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
     
     
     # lec2 (basic terminal & bash command)
     
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
     
          mv (file you want to move) (file name you want to save) (mv means move)
     
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
     
     
     
     
     # lec 3(advance terminal and bash)
     
     1.)this command to know all details of any file and any things for this you need to at that place wher you want to know  
     
           ls -l
     
     
      2.)if you want to delete the folder then
     
           rm -r (folder name)
     
      3.)if you want to see all file and folder in reverse oder
     
             ls -r
     
     4.)if you want to putout some specfic file then
     
           ls -l | grep .json,md,yamal (after . put file name fater .)
           ls -lr | grep .json,md,yamal (in this case you getout in reverse oder)
     
     5.) if you want to say anything from your mack go to terminal
     
              say (type what ever you want to say)
     
     6.)if you want to write in file you can use vi (file name) and also use cat
     
             cat > (file name)
             (for save file controle + d)
     if you want to add something new to this file then 
     
           cat >> file
           (for save control+d)
     
      7.) if you want to change the file or folder name 
     
          mv (file and folder name you want to c hange)  (name you want but it is new name that not exist in you system)
     
      8.)if you want to copy the directory to another directory
     
            cp -r (folder name you want to move) (the place you want to move yoour folder)
     
      9.)for remove the folder 
     
          rm -r (folder name)
     
      10.)if you want to know all the hidden files and folder for that(hidden folder starts with . )
     
         ls -a
     
      11.)if you want to delete the hidden folder
     
            rm -rf (.folder name)
     
      12.)if you want to print any things you want 
      
             echo "message"
          
             
     
     13.)if you want to find path 
     
           echo $path
           (if you want to check then cd past path)
     
      14.)if you want to see occurence of particuler word in whice line of your code 
     
           grep (the word) (in which file)
           
     15.) if you want to see in how many line the particular word occur
     
           grep -c (word) (file)
     
     
     
     
     
     # lec 4(get,post,put,delete methodes)
     
     /*v.v.i:-.send() send only string
     
     .json() send string and number both*/
     
     
     // let express=require("express")
     
     // let app=express();
     
     // let port=3001;
     
     // app.use(express.json()) //it is use in post method to parse the body value into updated anythins
     
     // let user=[{name:"dhiru", //arrary object
     
     
     // kidneys:[{ //inside arrey object
     
     //     helthey:false,
     
         
     // },{
     
     //     helthey:true
     
     // }]
     
     // }];
     
     // console.log(user[0]); 
     
     // app.get("/",(req,res)=>{
     
     //     let countofkidney=user[0].kidneys.length;
     
     //     let dhiruhelth=user[0].kidneys;
     
     //     for(i=0;i<user[0].kidneys.length;i++){
     
     //         let countofhelheykidney=0;
     
     //         if(user[0].kidneys.helthey===true){
     
     
     //             countofhelheykidney+=i;
     
     //         }
     
     //     }
     
     //     res.json({//you need to write all the res in one line
     
     //         countofkidney,
     
     //         dhiruhelth,
     
     //         // countofhelheykidney
             
     // })
     
     // })
     
     
     // app.post("/",(req,res)=>{
     
     //  let ishelthey=req.body.ishelthey
     
     //  user[0].kidneys.push({ //use open with curli bracket
     
     //     helthey:ishelthey
     
     //  })
     
     //  res.json({mess:"done"})
     
     // })
     
     // app.listen(port,console.log(
     
     //    `sit is running on ${port}`
     
     // ))
     
     
     // app.put("/",(req,res)=>{
     
     //     for(i=0;i<user[0].kidneys.length;i++){
     
     //         user[0].kidneys[i].helthey=true;
     
     //     }
     
     
     //     res.json("ok")
     
     // })
     
     //removing unhelthey kidney
     
     // app.delete("/",(req,res)=>{
     
     //     const newkidney=[]
     
     //     for(i=0;i<user[0].kidneys.length;i++){
     
     //         user[0].kidneys[i].helthey=false;
     
     //         newkidney.push({
     
     //             helthey:true
     
             
     //         })
     
     //     }
     
     //     user[0].kidneys=newkidney;
     
     //     res.json({mess:"ok"})
     
     // })
     
     // let express=require("express");
     
     // let app=express();
     
     // let port=3002;
     
     
     // function ok(n){
     
     //     let sum=0;
     
     //     for(i=0;i<=n;i++){
     
     //         sum+=i
     
     //     }
     
     //     return sum
     
     // }
     
     // app.get("/",(req,res)=>{
     
     //     let n=req.query.n;
     
     //     let sumof=ok(n);
     
     //     res.send(sumof.toString) //.toString() is very inportant to send data in number or you can use json in place of send because it send direct send number or string
     
     // })
     
     // app.listen(port,console.log(`app is listen on ${port}`));
     
     
     
     # lec 5
     
     //map ,filter ,arrrow function
     
     //without arrow method
     
     // function ok(a,b){
     
     // console.log(a+b);
     
     // }
     
     // ok(10,10)
     
     
     
     //arrow function
     
     // let ok=(a,b) => { //mainley use this function in those place in whice the name of function is not nesssery 
     
     //     console.log(a+b)
     
     // }
     
     // ok(10,30);
     
     //one dumb way
     
     // function ok(a,b,c,d,e){
     
     //     let p=[a,b,c,d,e]
     
     
     //     console.log(a*2,b*2,c*2,d*2,e*2)
     
     // }
     
     // ok(1,2,3,4,5);
     
     //another dumb way
     
     // let q=[1,2,3,4,5]    
     
     
     // const newr=[];
     
     //     for(i=0;i<q.length;i++){
     
     //         newr.push(q[i]*2) 
     
     // }
     
     // console.log(newr)
     
     
     //best way to solve upper problem using map function
     
     // let newarr=[1,2,3,4,5];
     
     // function ok(a){ 
     
     //     return a*2;
     // }
     
     // console.log(newarr.map(ok))//map take arr before . and after take a function in this function inside you maths formulas 
     
     // let newarr=[1,2,3,4,5];
     
     // console.log(newarr.map( (a)=>{ 
     
     //     return a*2;
     
     
     // }
     
     // )
     
     // )//map take arr before . and after take a function in this function inside you maths formulas 
     
     
     //filtering
     
      //ugly methos 
      
     //  const arrr=[1,2,3,4,5,6];
     
     //  const newarr=[];
     
     //  for (i=0;i<arrr.length;i++){
     
     //     if (arrr[i]%2==0){
     
     //     newarr.push(arrr[i]) //the things you want to put inside empity arr at firest
     
     
     //     }
     
     //  }
     
     // console.log(newarr) 
     
     
     
     //anothe ugly method
     
     // const a=[1,2,3,4,5,6]
     
     // const c=[]
     
     // let ok=() => { //if oyou want to use arrow function then you need to undestand how to use it is used with const or let in outside
     
     //     for(i=0;i<a.length;i++){
     
     //         if(a[i]%2==0){
     
     //              c.push(a[i]) //if we write the return inside the if it try to exit as soon as possible but we want to to this at end of err for that we not use return inside the if in this case
     
     //         }
     
     //     }
     
     //     console.log(c)
     
     // }
     
     // ok()
     
     
     
     
     //by filter method
     
     // let a=[1,2,3,4,5,6];
     
     // ook=(d)=>{
     
     //     if (d%2==0){
     
     //         return true
     
     //     }
     
     //     else{
     
     //         return false
     
     //     }
     
     // }
     
     // let b=a.filter(ook)
     
     // console.log(b)
     
     
     
     //lets try to code in which we use all this filter,mapand arrow function
     
     // let a=[1,2,3,4,5,6,7,8];
     
     //  ok=(n)=>{
     
     //     if (n%2==0){
     
     //         return true;
     //     }
     
     //     else{
     
     //    return false
     
     //     }
     
     //  }
     
     //  let b=a.filter(ok)
     
     //  tt=(b)=>{
     
     //     return b*2
     
     //  }
     
     //  let c=b.map(tt)
     
     //  console.log(c)
     
     
     # lec 6
     
     ## *)how to edit the repo that have in your github into main branch
     
     ### 1.)type one edit and send to main branch to that repo and don't need to create new branch
     
                  git clone (HTTP url)
        .)after you need to go into this repo
     
                cd (git repo name)
     
        .)after you need to check how many file exist in this repo for that
     
               ls
        .)if you want to check all contant of that file 
     
             cat (file name)
     
        .)and if you want to change naything from terminal in the code base of repo 
     
            vi (file name)
     
       .)make the all changes and then you want to save this changes for that
     
            :w (for save change)
            :q!(to get out from this file)
     
     .)you can use this upper command at a same time
     
           :wq!
     
      .)if you want to all changes like in which file and which line is add and what the line 
     
         git diff 
         (you should also use) git status
     
      .)after that you need to add this all changes into your main branch of repo 
     
          git add .
          git commit -m "message"
          git push
     
      #### .)done your changes seen in your github repo into new branch
     
     ### 2) if you want to add into your code into a new branch
     
     .)this is the command to push the change in our repo in new branch
     
     1.)fiest you need to clone the project from your github
     
           git clone (HTTP url of your repo )
     2.)you need to go into that repo 
     
            cd (repo file name)
      3.)after you need to go into that specfic file that you want to change
     
            cd (file name)
     4.)you need to open this file you should open this file into your terminal and any editor 
     
           vi (file nam)
           i (for insert any change into that file)
           (you need to press esc baton for run this lower command)
           :wq! (for save the file and get out from that file)
     
      5.)you need to create the new branch
     
          git branch (name of new branch name)
      6.)change the branch from main to new branch
     
          git checkout (new branch name)
     7.)you can also use this two upper code at same time to create the new branch and change the branch
     
             git checkout -b (name of branch you want to craeate and go to that branch )
       8.)you need to add this changes to the new branch \
     
            git add .
     9.)commit the change
     
           git commit -m "message"
      10,)you shoude push the changes
     
           git push -u origin ok     (origine the remote name) (ok is the new branch name) 
           
     
       ### 3.)by the help of this command you can send pull request to some one and to self
     
       #### you alway make new branch that have all changes and send the pull request vie that branch
     
       1.)clone the repo into your computer
     
           git clone (HTTP url of that repo )
     
       2.)view the repo by
     
           ls
      3.)enter that specfic file that you want to contribute
     
          cd (file name)
     
      4.)see the contant of code by 
     
           cat (file name that you want to see)
     
       5.)you can make change the from terminal and by the use of any editor like vs code
     
           vi (file name)
           i (to incert the changes )
           (press the esc batton for run this following command)
           :wq! (to get out from the file)
     
       6.)you need to make the new branch 
     
           git branch (branch name)
     
        7.)get enter into this new branch
     
           git checkout (new branch name)
        8.)you need to add a new remote
     
        ##### remote:-remote is nothing it just work like linker.in remote you need to add the remote of that original github that you want to send pull request how you can do this by given command
     
          git remote add (name of remote) (crome url of that github you want to send pull request url in this form:-(https://github.com/dhirukumar/my-Gsoc.git)
       9.)you need to add the changes to your new branch 
     
         git add .
       10.)commit the changes
     
          git commit -m "message"
       11.)you need to push the changes to your github new branch ang also you got a url after run this command by this command you can send pull request)
     
            git push -u (remote name) (new branch name)
        12.)done you need to copy the url you got for send pull request and pest to crome sarch bar and send pull request)
     
        ### other thins that help you to delete anythins from terminal
     
        1.)if you want to a directory that present into your destop and it showes overriding
     
          rm -rf (folder namr)   (f means forsefuly) (r is baseclly used in delete the folder)
     
        2.)if you inside a your git repo and want to delete any sub-file
     
          rm -rf (file name)
     
       3.)you are inside your git reppo and want to delete the branch 
     
            git branch -D (branch name)
     4.)if you want to delete the remote 
     
           git remote remove (remote name)
      6.)how to find the hidden file
     
             ls -a
             
     5.)how to delete the hidden file
     
         rm -rf (hidden file that starts with .) (r is used when we delete the folder)
     
       
     
     
     
     
     
     
