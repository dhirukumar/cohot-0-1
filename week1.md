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

