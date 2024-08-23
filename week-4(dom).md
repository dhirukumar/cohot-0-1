# lec 1

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    <link rel="stylesheet" href="ok.css"> 
 </head>
<body>
    <!-- in this line of code we use DOM for change the text of id(ok)  -->
    <h1 id="ok">hey nice</h1>
    <script> // script work like javascrepite we can use anythings in script from js
        document.getElementById("ok").innerHTML="kay hal hi bahi ka";
    </script>
    <p>above text is changed by using DOM</p>
    <br>
    <br>
    <hr>
    <!-- in this we can change the image by using DOM -->
    <img  id="image" src="/oo.png">
    <script> // script work like javascrepite we can use anythings in script from js
        document.getElementById("image").src="/pp.jpeg"
    </script>
    <p>we can change the image by using DOM</p>
    <br>
    <br>
    <hr>
    <!-- in this we learn how to write anything in innerHTML by using DOM -->
    <p id="date"></p>
    <script> // script work like javascrepite we can use anythings in script from js
     document.getElementById("date").innerHTML="date:"+Date();
     document.write(Date()+"<br>");
     document.write("hey dhiru");
    </script>
    <br>
    <br>
    <hr>
    <!-- in this you learn how to setattribute using DOM -->
<h1 id="oooo">this hadding colour is changed when you click on this button</h1>
<button onclick="myfunction()">click</button> <!---->
<script>
    function myfunction(){
        document.getElementById("oooo").setAttribute("id","democlass") // you can also use class in place of "id"
    }
</script>
<br>
<br>
<hr>
<!-- same as upper case when you click on change button then o function apply that change the type of inpute to button which id id is (inpute) -->
<input id="input" value="@gmail.com">
<button onclick="ofunction()">change type</button>
<script>
    function ofunction(){
        document.getElementById("input").setAttribute("type","button");
    }
</script>
<br>
<br>
<hr>
<!--in this we are learn about how to create new element by useing DOM and to to add to our html element-->
<div id="div">
    <p>the firest line which is already written in html<p>
</div>
<script>
    let para=document.createElement("p")
    para.innerHTML="this is second paragraph which is written in scrept by using DOM"
    document.getElementById("div").appendChild(para)
</script>
<br>
<br>
<hr>
<!-- how to remove useing .remove in DOM -->
<p id="remove"> by clicking on this botton all text will be removed</p>
<button onclick="remove()">remove</button>
<script>
function remove(){
    document.getElementById("remove").remove();
}
</script>
<br>
<br>
<hr>
<!-- in this you learn how to remove one element from a div not remove hole div -->
<div id="main">
    <p id="dhiru">hey dhiru</p>
    <P id="kalu">kalu don</P>
</div>
<button onclick="okremove()">remove kalu don</button>
<script>
function okremove(){
    document.getElementById("main").removeChild(kalu);
}
</script>
<br>
<br>
<hr>
<!-- this is the code in which when you click on replace button then anil is replaced with rana using DOM -->
<ul id="ulist">
    <li>kalu</li>
    <li>anil</li>
    <li>dhiru</li>
</ul>
<button  onclick="rfunction()" id="replace" >replace</button>
<p>click on replace button after that anil is replaced with rana</p>
<script>
    function rfunction(){
        const a=document.getElementById("ulist").children[1];
        const c=document.getElementById("ulist").children[2];
        const b=document.createTextNode("rana");
        const d=document.createTextNode("kaliya");
        a.replaceChild(d,a.childNodes[0]); //this is v.v.i to understande the concept of DOM replace
        c.replaceChild(b,c.childNodes[0]);
    }
</script>
<br>
<br>
<hr>
<!--in this you'll learn about how to remove text add put another text with three methode with DOM  -->
<p id="just">hey dhiru</p>
<button id="boo" onclick="hey()">click</button>
<script>
    function hey(){
        //this three methode do same work to remove and add another text
   document.getElementById("just").firstChild.nodeValue="inn";
   document.getElementById("just").innerHTML="ok";
   document.getElementById("just").childNodes[0].nodeValue="pp";
}
</script>
<br>
<br>
<hr>
<!--  -->
<div class="op">
    <h1>hellow</h1>
    <p>hellow world</p>
    <ul class="jin">
        <li class="jin">oo</li>
        <li class="jin">tt</li>
        <li id="jin">cc</li>
    </ul>
</div>
<script type="text/javascript">
    const ul=document.querySelector(".jin"); //quaeyselector select all element that have .jin id or class
    // console.log(ul.parentNode)
    ul.parentNode.style.color="red";
   console.log(ul.children[0])
   console.log(ul.previousSibling) //for ul the previous sibling is <p> and for<P> <uL> is next sibilng
</script>
<br>
<br>
<hr>
<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim veritatis praesentium placeat minima .</h1>
<p>Lorem ipsum .</p>
<P1 onclick="this.innerHTML='opps!'">click on this text</P1> <!--on click this paragraph the paragraph is changed to opps! because in onclick function we put (this.innerhtml='opps!') this taks this line and innerHTML change the text of html-->
<br>
<p>another methods of doing this same things</p>
<br>
<!-- another method of doing this upper code -->
<h1 id="ff">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum molestias eos, culpa odio mollitia doloremque 
</h1>

<p id="hh" onclick="fun()">click on this text</p>
<script>
    document.getElementById('ff').style.fontSize='20px'
    function fun(){
        document.getElementById("hh").innerHTML = "ooops!";
    }
</script>
<br>
<br>
<hr>
<!-- in this code you will lear about hoe to hide and show a text by using DOM -->
<p id="okk">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nemo provident numquam adipisci ad dignissimos eius veniam temporibus maiores tempora aperiam repudiandae sapiente mollitia, in iure aut voluptates dolorum praesentium.
</p>
<input type="button" value="hide text"
onclick="document.getElementById('okk').style.visibility='hidden'">
<input type="button" value="show text" onclick="document.getElementById('okk').style.visibility='visible'">
<br>
<br>
<hr>
<!-- in this code you just doing same things like onclick function but in this case you will put onclick function in <screipt> not more than that-->
<button id="bb">click and get time</button>
<h3 id="gg"></h3>
<script>
    document.getElementById("bb").onclick=display;
    function display(){
    document.getElementById("gg").innerHTML=Date();
    }
</script>
<br>
<br>
<hr>
<!-- when you enter anything in this input box it will converted into uppercase -->
enter your name:<input id="yo" type="text" oninput="UpperFunction()"> <!--in this line (oninput) is doing work like when you enter anything so automatically it will be changed into uppercase-->
<p>when you click to </p>
<script>
    function UpperFunction(){
    const x=document.getElementById('yo'); //this is the refference to the element
    x.value=x.value.toUpperCase(); //get the element value and change into uppercase
    }
</script>
<br>
<br>
<hr>
<!-- when you get you mouse over on this div it hober something and when you get out it show another hober -->
<div id="gr" onmouseover="mover()" onmouseout="mout()" style="background-color: brown; height: 100px; width: 100px;">put mouse on me</div>
    <script>
        function mover(){
            document.getElementById("gr").innerHTML="thanku";
        }
        function mout(){
            document.getElementById("gr").innerHTML="get mouse over me"
        }
    </script>
<br>
<br>
<hr>
<!-- in this you will learn about how to hobber anything when you press and uppress anything -->
<div id="bg" style="background-color: aqua; height: 100px ; width: 100px;" onmousedown="mdown()" onmouseup="mup()" >click me</div>
<script>
    function mdown(){
        document.getElementById("bg").style.backgroundColor="red"; //when you press then it show red
    }
    function mup(){
        document.getElementById("bg").style.backgroundColor="pink"; //when you get uppress it show pink
    } 
</script>
<br>
<br>
<hr>
<!--by the help of this code you will send a alert message to user-->
<button id="poki">alert</button>
<script>
    document.getElementById("poki").addEventListener("click" ,myfunction);
    function myfunction(){
        alert("kalu kaliya")
    }
</script>
<br>
<br>
<hr>
<p id="ii"> when you resize you window it will show you a random number</p>
<script>
    window.addEventListener("resize",function(){
        document.getElementById("ii").innerHTML=Math.random();
    })
</script>
<br>
<br>
<hr>
<!-- in this you will do same thing to show a dange to user but in this case it show two times -->
<button id="ss" >try is</button>
<script>
    document.getElementById("ss").addEventListener("click",function(){
        alert("danger")
    })
    document.getElementById('ss').addEventListener("click",function(){
        alert("chal nikal")
    })
</script>
<br>
<br>
<hr>
<!-- in this code you will learn about not every time repite refference and the useful place of addeventslistener by giving 1st argument is any tag and 2nd argument is a function  -->
<button id="pop" style="height: 100px; width: 100px;">click</button>

<script>
    const button = document.getElementById("pop");

    // Adding event listeners to the button
    button.addEventListener("mouseover", dhiru);
    button.addEventListener("mouseout", ankit);
    button.addEventListener("mousedown", bd);

    // Function to run when mouseover event occurs
    function dhiru() {
        button.style.backgroundColor = "red"; // Change background color to red
        button.innerHTML = "mouse over me";   // Change button text
    }

    // Function to run when mouseout event occurs
    function ankit() {
        button.innerHTML = "mouse not on me"; // Change button text
        button.style.backgroundColor = "pink"; // Change background color to pink
    }

    // Function to run when mousedown event occurs
    function bd() {
        button.innerHTML = "click on mouse"; // Change button text
        button.style.backgroundColor = "blue"; // Change background color to blue
    }
</script>
<br>
<br>
<hr>
<!-- Div that will change on mouse move -->
<div id="lol" style="height: 100px;font-size: 18px; border: 1px solid black; ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut labore rerum unde possimus dolores similique vero sint. Eaque veniam esse minus eligendi laboriosam placeat ipsa vero libero a minima Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis illo nam, in ipsa veritatis explicabo at vitae distinctio ullam odit, reiciendis molestias autem velit odio rerum. Ea, modi ipsa.
Nemo impedit eaque soluta autem nisi odio error ab sed fugiat, quis voluptatibus illo voluptatum corrupti molestiae vero labore quia ratione non obcaecati quisquam animi. Porro consequatur delectus doloremque iusto.
Nobis cum autem voluptas iure aliquid labore, deleniti quas temporibus fugit molestiae, odio, quaerat soluta. Nam, dolorum blanditiis temporibus commodi quia earum eveniet obcaecati sed dolore, numquam sint maxime alias!
</div>
<!-- Button to remove the event listener -->
<button id="papa" onclick="don()">Click to Stop Mouse Move Effect</button>

<script>
    // Select the div element
    const xx = document.getElementById("lol");

    // Add an event listener for the mousemove event
    xx.addEventListener("mousemove", vip);

    // Function to run when mousemove event occurs
    function vip() {
        xx.style.backgroundColor = "pink"; // Change background color to pink
        xx.innerHTML = Math.random(); // Display a random number in the div
    }
    document.getElementById("papa").style.backgroundColor="blue"

    // Function to remove the mousemove event listener
    function don() {
        xx.removeEventListener("mousemove", vip); // Remove the event listener
    }
</script>
<br>
<br>
<hr>
<!--in this code you will learn about (usecapture) that is true or false bydefalt it is false  -->
<div id="dov1" style="background-color: orange;border: 2px solid rgb(29, 126, 84);">
    <h1>bubbling</h1>
    <p id="cgp1" style="background-color: white;border: 1px solid black;">click me</p>
</div>
<br>
<div id="dov2" style="background-color: orange; border: 2px solid rgb(22, 143, 32);">
    <h1>capturing</h1>
    <p id="cgp2" style="background-color: white;border: 1px solid black;">click me
    <h2 id="ho" style="background-color: aqua; border: 1px dotted blue;">ho ho</h2></p>
</div>
<script>
document.getElementById("dov1").addEventListener("click",function(){
    alert("orange")
},false);//when you not define any usecapture it is bydefault is false it showes upward in this (div) is one things so it show orange only
document.getElementById("cgp1").addEventListener("click",function(){
    alert("white")
},false);//when you not define and usecapture it is bydefault is false it showes upward in this case (p) and(div) two things so it show white and orange
document.getElementById("dov2").addEventListener("click",function(){
    alert("orange")
},true);//when you give true the usecapture than it go downward in this case div is only one so it show orange alert
document.getElementById("cgp2").addEventListener("click",function(){
    alert("white")
},true);//when you give true the usecapture than it go downward in this case (p)and(div)is two then it show orange and then white
document.getElementById("ho").addEventListener("click",function(){
    alert("sky-blue")
},true);//when you give true the usecapture than it go downward in this case (ho) and (div) two things it show orange and sky-blue in alert
</script>
<br>
<br>
<hr>
<!--  -->

</body>
</html>

</body>
<!-- you can also put this all in css file that i have connected -->
<style>
    #democlass{ /*you can also use . in place of # when you write class in place of id*/
        color: rgb(7, 0, 214);
    }
</style>
</html>
