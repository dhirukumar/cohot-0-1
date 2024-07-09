# lec 1

// let firestname="dhiru"; //let and vare same
// const age=20;   //const not mutable
// let ismarred=true;
// console.log("this person name is "+fire+" and his age is "+age)
// console.log("this person name is ");
// console.log(fire);
// if(ismarred==true){
//   console.log(firestname+" is marred");
  
// }
// else{
//   console.log(firestname+" is not marred");
// }

// let a=0;
// for(i=0;i<=10;i=i+1){
//   a=a+i;
//   // break;
// }
//  console.log(a);
// let sum = 0;

// for (let i = 0; i <= 10;i++) {    //for loop
//   sum += i;
//   // console.log("Sum of numbers from 1 to 10:", sum);
// }


// console.log("Sum of numbers from 1 to 10:", sum);


// let age=[12,13,14,15,17]  //array
// console.log(age);
// var b=age.length;
// console.log(b);
// for(i=0;i<=b;i++){
//   if(age[i]%2==0){
//     console.log(age[i]);
//   }
//}

// let alluser={         //object
//   firstname : "ankit",
//     age : 22,
//    gender : "male"
    
// };
// console.log(alluser["firstname"]);

// const alluser=[{       //arrey object
//   firstname:"dhiru",
//   gender:"male",
//   age:22
// },{
//   firstname:"ankit",
//    gender:"male",
//   age:23
// },{
//   firstname:"rahul",
//    gender:"male",
//   age:24
// }]
// let b =alluser.length;
// for(i=0;i<b;i++){
//   if(alluser[i]["gender"]==="male"){
//     console.log(alluser[i]["firstname"]);
//   }

//  if(alluser[i]["age"]%2==0){
//    console.log(alluser[i]["age"]);
   
//  }  
// }

// function my(a,b){      //function
//   return a+b;
// }
// console.log(my(4,8));

  //in this code if you want to change the function by then you need to change the function 1 by your conveniyance

// function sum(num1,num2){
//   let result =num1+num2;
//   return result;
  
// }

// function sub(data){
//   console.log("the sum of "+data);
// }
// function subpassive(data){
//   console.log("sun's of result is " +data);
// }
// const s=sum(3,5);
// sub(s);

   //like this
// function sum(num1,num2){
//   let result =num1+num2;
//    passive(result);  //or use sub 
// }

// function sub(data){
//   console.log("result of sum "+data);
// }
// function passive(data){
//   console.log("sum's of result is " +data);
// }
// const a=sum(2,2);


  //but in case if you not want to change the function and you want to use this two function by your chooes

// function sum(num1,num2, fntocall ){    //callbacks 
//   let result =num1+num2;
//    fntocall(result);  //or use sub 
// }

// function sub(data){
//   console.log("result of sum "+data);
// }
// function passive(data){
//   console.log("sum's of result is " +data);
// }
// const a=sum(2,2,passive);
//console.log(sum(1,3,sub));   /*it gives undifine because 
                                   we not gives return in sum 
                                       function*/

   //you can also solve this upper problem by this

// function calculate(num1,num2,type){
//   if (type=="sum"){
//     return num1+num2;
//   }
//   if(type=="sub"){
//     return num1-num2;
//   }
// }
// let a=calculate(1,2,"sum");
// console.log(a);

  //or you can solve this upper problem by this

// function calculate(num1,num2,final){  
//   const s=final(num1,num2);  /*here after num2 we use a word 
//                              for callback and in this word we                               stored num1 num2*/
//   return s;}

// function sum(num1,num2){
// let a= num1+num2;
//   return a;}

// function sub(num1,num2){
//   let b=num1-num2;
//   return b;
// }

// let d=calculate(3,4,sub)   /*sub call final and final call sub 
//                                         and gives -1*/
// console.log(d); 

//  function you(){
// console.log("hellow dhiru");  /*setTimeout use for delay 
//                                output if you want 2sec delay 
//                                then you need to type 2000*/
//  }
// setTimeout(you,4000);

//  function you(){
// console.log("hellow dhiru");  /*setInterval use for print 
//                                output after sone interval if 
//                          you want 2sec gap than you type 2000*/
//  }
// setInterval(you,4000);

  //another way to define function
// function ok(p1,p2){
//   console.log(p1,p2);
// }
// setTimeout(ok,2000,"dhiru","ankit")

# lec 2


//******************************************In strings**********8**********************************

/*   ** v.V.i when i was write any function at that time we need to understand one things that wher we write
     we write any function ex:-indexof(incorrect):indexOf(correct),lsatindexOf(incorrect):lastIndexOf(correct)
     we need to write middel new words with upper cap*/      

// function getstr(str){
//     console.log("original str:",str);
//     console.log("length:",str.length);
// }
// getstr("hellow dhiru");


// function findindex(str,target){
//     console.log("original str",str);
//     console.log("index",str.indexOf(target));  //o is O in indexOf 
// }
// findindex("hellow dhiru","dhiru");


//  function findindex(str,target){
//         console.log("original str",str);
//         console.log("index",str.lastIndexOf(target));  //if i want the index of last dhiru
//     }
// findindex("hellow dhiru dhiru dhiru","dhiru"); 

// function slicestr(str,start,end){
//     console.log("original str",str);
//     console.log("slice of:",str.slice(start,end)); //slice it is a function
// }
// slicestr("hellow dhiru",0,6); //it gives until 5 not the str present on 5 like "w" in this example


// function slicestr(str,start,end){
//     console.log("original str",str);
//     console.log("slice of:",str.slice(start,end)); //slice it is a function
//     console.log("slice with length:",str.substr(2,6))  /*it start from index 2 and gives the str to next 6 
//                                                                      str it means 6 is number of str*/
// }
//      slicestr("hellow dhiru",0,6); //it gives until 5 not the str present on 5 like "w" in this example


// doing same things with another method
// function cutIt(str, startstr, endstr) {
//     let a = "";
//     for (let i = startstr; i < endstr; i++) {
//         if (i >= startstr && i < endstr) {
//             a = a + str[i];
//         }
//     }
//     return a;
// }

// let b = "dhiru kumar";
// let c = b.slice(0, 5);
// console.log(c);  // Output: "dhiru"
// console.log(cutIt("dhiru kumar", 0, 5));  // Output: "dhiru"

// function getSubstring(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After substring:", str.substring(start, end));
//   }
//   getSubstring("Hello World", 3, 5);


// function replacestr(str,target,replace){
//     console.log("original str:",str);
//     console.log("replace:",str.replace(target,replace));
// }
// replacestr("hellow dhiru","hellow","my name is");
    
// function splitt(str){
//     console.log("string:",str);
//     console.log("after split function:",str.split(" ")); //" " space is dalimeater for this string
// }
// splitt("my name is dhiru kumar");

// function splitt(str){
//     console.log("string:",str);
//     console.log("after split function:",str.split(",")); //what ever dalimeater pass in "" string divided into array
// }
// splitt("my,name,is dhiru,kumar");

// const a="     dhiru kumar      "
// console.log(a.trim()); //it cut down the space in front and back not in middel

// function upper(str){
//     console.log("orignal str",str);
//     console.log("after upper",str.toUpperCase());
// }
// upper("dhiru kumar");

// function lower(str){
//     console.log("orignal str",str);
//     console.log("after upper",str.toLowerCase());
// }
// lower("DHIRU KUMAR");

// function split(str,saprator){
//     console.log("orignal str",str);
//     console.log("after split",str.split(saprator));
// }
// split("DHIRU KUMAR",""); // same you need to pass dalimeater like:- " ",",","-" and any things 



//***************************************In number**********************************************

// let num1 = parseInt("123");  // num1 = 123
// let num2 = parseInt("010");  // num2 = 10 (interpreted as octal because it starts with '0')
// let num3 = parseInt("0xF");  // num3 = 15 (interpreted as hexadecimal because it starts with '0x')
// let num4 = parseInt("15px"); // num4 = 15 (ignores non-numeric characters after valid number)
// let num5 = parseInt("Hello"); // num5 = NaN (cannot convert 'Hello' to a number)
// console.log(num1,num2,num3,num4,num5); /*parseInt returns an integer parsed from the input string. 
//                            If the first character cannot be converted to a number, NaN (Not a Number) is returned.*/

// function parseflote(str){
//     console.log("real value:",str);
//     console.log("after parseflote:",parseFloat(str));
// }
// parseflote("24-jm.34")

//******************************************Array**********************************************/

// function array(arr,element){
//     console.log("original array:",arr);
//     let a=arr.push(element);  //push to add number at end of array
//     console.log("after doing operation in array:",arr);
// }
// array([1,2,3],4);

// function array(arr){
//     console.log("original array:",arr);
//     let a=arr.pop();  //for pop last array
//     console.log("after doing operation in array:",arr);
// }
// array([1,2,3]);

// function array(arr){
//     console.log("original array:",arr);
//     let a=arr.shift();  //for pop element from firest
//     console.log("after doing operation in array:",arr);
// }
// array([1,2,3]);

// function array(arr,element){
//     console.log("original array:",arr);
//     let a=arr.unshift(element);  //for add element from firest
//     console.log("after doing operation in array:",arr);
// }
// array([1,2,3],0);

// function array(arr1,arr2){
//     console.log("original array:",arr1,arr2);
//     let a=arr1.concat(arr2);  //for add element from firest
//     console.log("after doing operation in array:",a);
// }
// array([1,2,3],[4,5,6]);

// const a=[1,2,3];
// function b(str){
//     console.log(str);
// }
// a.forEach(b);

// function log1(){
//     console.log("dhiru kumar");
// }
// function log2(){
//     console.log("dhiru singh")
// }
// function log3(callBack){
//     callBack();
// }
// log3(log2); //callback by giving parameter in function

// function log1(){
//     console.log("dhiru kumar");
// }
// function log2(){
//     console.log("dhiru singh")
// }
// function log3(fn){
//     fn();
// }
// log3(log1); //fn used for callback the function as a argumaent


//  long way to do this let's try to do with function in next code
// const dog={
//     name:"dog",
//     legcount:2,
//     speaks:"baoo"
// }
// const cat={
//     name:"cat",
//     legcount:4,
//     speaks:"miyyo"
// }
// console.log(dog["name"]+" "+"speaks"+" "+dog["speaks"]);
// console.log(cat["name"]+" "+"speaks"+" "+cat["speaks"]);


  //smae things doing with function
  /*(in this code every things is same but in upper code we call by function name in in this we use log with function
    because we return it*/
//   const dog={
//         name:"dog",
//         legcount:2,
//         speaks:"baoo"
//     }
//     const cat={
//         name:"cat",
//         legcount:4,
//         speaks:"miyyo"
//     }
//     function animal(animal){
//         return(animal["name"]+" "+"speaks"+" "+animal["speaks"]);
//     }
//     console.log(animal(dog));


 // same but used class
// class animal{
//     constructor(name,legcount,speaks){  //class have one constructor
//         this.name=name;
//         this.legcount=legcount;
//         this.speaks=speaks
//     }
//     speak(){
//         return("hey i am"+" "+"a"+" "+this.name+" "+" and i speak"+" "+this.speaks);
//     }
//     leg(){
//         return ("hey i have"+ " "+this.legcount+" "+"leg")
//     }
// }
// let cat=new animal("cat",4,"miaao"); //use always new when you want to any class
// const dog=new animal("dog",4,"boo boo")
// dog.speak(); //for use this line of code then change return to log in speak
// cat.speak(); //this is right but for use this line use log in speak
// console.log(dog.speak(),dog.leg());//it run not gives any undifine because we return in both function
//speak(cat);//this is also wronge
// console.log(cat); //this is wrong


  //use of static inside the class
// class animal{
//         constructor(name,legcount,speaks){  //class have one constructor
//             this.name=name;
//             this.legcount=legcount;
//             this.speaks=speaks;
    
//         }
//         static my(){
//             console.log("hey dhiru");
//         }
//         speak(){
//             return("hey i am"+" "+"a"+" "+this.name+" "+" and i speak"+" "+this.speaks);
//         }
//         leg(){

//             return ("hey i have"+ " "+this.legcount+" "+"leg")
//         }
//     }
    // animal.my(); //you can call static function directly
    /* note:-when we make any function inside class like(speak,leg) then we nedd a object outside the class but 
    when we make any static function inside class then we call it directly */


//********************************Date***************************/

// function alldate(){
    // const a=new Date();
    // console.log("currentDate",a);
    // console.log("Month",a.getMonth()+1);//in js months starts from zero like january is 0 index feb has 1 index so when we want current months then we +1 in months
    // console.log("Year",a.getFullYear());//we need to type getFullyear not getYear because getyear gives us (currentyear-1900)
    // console.log("Date",a.getDate());
    // console.log("hours",a.getHours());
    // console.log("Minutes",a.getMinutes());
    // console.log("seconds",a.getSeconds());
    // console.log("MiliSeconds",a.getMilliseconds());
    
   // //setting all things
    // a.setDate(9);
    // console.log("Date",a.getDate());
    // a.setFullYear(2022);
    // console.log("year",a.getFullYear());
    // a.setHours(24); //24 return o because 24 have 0 index
    // console.log("hours",a.getHours());
    // const f=new Date(9,6,2024,2); //Methods to get specific components of the date (day of the month, month (0-11), year, day of the week (0-6, where 0 is Sunday)).
    // console.log("set all details by itselfe:",Date());
    
//     const k=new Date();
//    console.log("it is the time in milisecond after 1970:",k.getTime()); // getTime gives you how much miliSeconds pass after 1970 to rightnow
// }
// alldate();

//use case of getTime

// function calculate(){
//     let g=0;
//     for(i=0;i<1000000000;i++){
//       g=g+i;
//     }
//      return g;
// }

// const beforedate=new Date();
// let before=(beforedate.getTime());
// console.log(before);

// console.log(calculate()); // calculate call function comes between this two getTime difference so gives after-before time

// const afterdate=new Date();
// let after=(afterdate.getTime());
// console.log(after);

// console.log(after - before);

// function zz(){
//     console.log(new Date().getTime());
// }
// function az(){
//     console.log("hey dhiru")
// }
// setInterval(az,1000); //setIterval use to print same thins after milisecods that you gave
// setInterval(zz,1000); 
    

// JSON(java script object notation)
  
//  JSON.stringifi
// const a={
//     name:"dhiru",
//     gender:"male",
//     age:20
// }
// // console.log(a["name"]);
// const b=JSON.stringify(a); //JSON.stringifi change the object to string
// console.log(b);
// console.log(typeof(b));
// console.log(b[5]);//we use like a string

//JSON.parse
// const a='{"name":"dhiru","gender":"male","age":20}'
// console.log(a);
// const b=JSON.parse(a);//change the string to object
// console.log(typeof(b));
// console.log(b["name"]);

//just for try
// const [a, ,b]=[1,2,3,4,5];
// console.log(a,b);//output will be 1 3
