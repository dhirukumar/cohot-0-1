    <!DOCTYPE html>
    <html lang="en">
     <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>todo</title>
    </head>
      <body>
    <div>
        <input type="text" placeholder="todo" id="title">
        <br><br>
        <input type="text" placeholder="discreption" id="discreption">
        <br><br>
        <button onclick="myfun()">add todo</button>
    </div>
    <div id="contaner">
      
    </div>
    <br>
   
    <script>
     function myfun(){


      let title=document.getElementById("title").value;
      let discreption=document.getElementById("discreption").value;
     //  document.getElementById("h1").innerHTML="work: "+title;
      //  document.getElementById("h2").innerHTML="discreption: "+discreption;

       //this is for title
       const outerdiv=document.createElement("div");
       outerdiv.innerHTML= "work: "+title+"<br>";
       outerdiv.style.fontSize="20px";
       document.getElementById("contaner").appendChild(outerdiv);


       //this is for discreption
     const innerdiv=document.createElement("div")
      innerdiv.innerHTML="discreption: "+discreption+"<br>";
     innerdiv.style.fontSize="20px";
     document.getElementById("contaner").appendChild(innerdiv);

       //for gap b/t title and discreption
       const gap = document.createElement("div");
       gap.innerHTML="<br><br>"
        document.getElementById("contaner").appendChild(gap);


       const bot=document.createElement("button");
       bot.innerHTML="mark as done";
      document.getElementById("contaner").appendChild(bot)
     bot.setAttribute("onclick",my);
      }



       //learn how to give id to each contaner button
       //this my function is not working you need to give spical id to each div and use id and removeit

     </script>
       </body>








