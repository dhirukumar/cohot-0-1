
//this is one way of doing another way of doing this at bottam
// import { useState } from "react"
// function App() {
//   const [title,setTitle]=useState("my name is Dhiru singh")
//   function update(){
//       setTitle("My Name is "+ Math.random())
//   }



//   return ( // in place of tag you also put null tag for handeling more than two child or in place of null tag you can also use the <React.Fragment> to handel more than one child in return
//     <> 
//       {/* <div> */}
//    <button onClick={update}>change the name</button>
//    <br></br>
//         <Header title={title} ></Header> 
//         <Header title="My Name is deep singh "></Header> 
//       {/* </div> */}
//      </> 
//   )
// }
// in the following two methods to take data from main component(App  )
1
// function Header({title}){ //firest latter of component name must be in capital
//   return (
//     <div>
//     {title}
//     </div>
//   )
 
// }
2
// function Header(props){ //props never written inside any tag 
//   return (
// props.title
//   )
// }



//another way of doing this this second method is batter for just re-render the child not hole parent 
// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <Headerwithbutton />
//       <Header title="My Name is Deep Singh" />
//     </div>
//   );
// }

// function Headerwithbutton() {
//   const [title, setTitle] = useState("My Name is Dhiru Singh");

//   function update() {
//     setTitle("My Name is " + Math.random());
//   }

//   return (
//     <>
//       <button onClick={update}>Change the Name</button>
//       <Header title={title} />
//     </>
//   );
// }

// function Header({ title }) {
//   return(

//     <div>{title}</div>
   
//   );
// }



//doing the same things like upper but in this we use react.memo for eleminate the extra re-rendre
// import { memo } from "react";
// function App(){
//   const [title,setTitle]=useState("My Nmae is Dhiru Singh");

//   function update(){
//     setTitle("My Name is "+Math.random())
//   }
//   return(
//     <div>
//    <button onClick={update}>change the title</button>
//    <Header title={title}></Header>
//    <Header title="My Name is Deep Singh"></Header>
//    <Header title="My Name is Deep Singh"></Header>
//    <Header title="My Name is Deep Singh"></Header>
   
//     </div>
//   )
// }
// const Header=memo(function Header({title}){ //if you not import the memo the in place of memo use React.memo
//   return(
// <div>
//   {title}
// </div>
//   )
// })


//makeing the todo for understand the (key) concept
// import { useState,memo } from "react";
// let counter=4 //this counter must be outside of app because when the app is re-render the counter again become4
// function App(){
//     const[todo,setTodo]=useState([  { id:1,title: "Go to gym", descreption: "Go to gym today" },
//     { id:2,title: "Buy groceries", descreption: "Buy groceries after work" },
//     { id:3,title: "Read a book", descreption: "Finish reading the new novel" }])

//     function add(){
//       // setTodo([...todo,{id:counter++,title: "Go to gym", descreption: "Go to gym today"}])//...todo sprade the todo and then add one another todo
      
//       //we can also use for-loop
//       const newtodo=[]
//       for(let i=0;i<todo.length;i++){
//         newtodo.push(todo[i]) //this help to add all existing todo to this newtodo
//       }

//       newtodo.push({id:counter++,title:Math.random(),descreption: Math.random()}) //this is 4th todo added when we click on add todo button

//       setTodo(newtodo)
//     }
//     return(
//         <div>
//           <button onClick={add}>add todo</button>
//           {todo.map(todos => (
//         <Todocom //inside this when you want to get any data then you not need to call by data type name in this case todo you can get the data from function name like in this case todos ex:(todos.id,todos.title,todos.descreption)
//          key={todos.id} //this key is most important because react need to know this sequense of this array because when you perform any opration with the array at that time react gives you right value
//           title={todos.title}
//           descreption={todos.descreption}
//         />
//       ))}
//         </div>
//     )
// }

// const Todocom=memo(function Todocom({title,descreption}){
//     return(
//         <div>
//         <h1>{title}</h1>
//         <h2>{descreption}</h2>
//         </div>
//     )
// })




//card concept
// function App(){
//   return(
//     <div>
// <Cardwrapper >hellow dhiru</Cardwrapper>
// <br></br>
// <Cardwrapper><Cardwrapper><Text></Text></Cardwrapper> </Cardwrapper> 
//     </div>
//   )
// }

// function Cardwrapper({children}){
// return(
//   <div style={{border:"2px solid black",padding:20}}>
//   {children}
//   </div>
// )
// }

// function Text(){
//   return(
//     <div>hellow dhiruuuu </div>
//   )
// }



//useEffect hooks concept

// import { useEffect, useState } from "react";

// function App() {
//   const [tododata, setTodo] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3030/todos")
//       .then(async (res) => {
//         const json = await res.json();
//         setTodo(json.alltodo);
//       })
//       .catch((error) => console.error("Error fetching todos:", error));
//   }, []);

//   return (
//     <div>
//       {tododata.length}
//       {tododata}
//       {tododata.map((todo) => (
//         <Op key={todo._id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Op(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h2>{props.description}</h2>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
function App() {
  // State to hold the todo data
  const [todos, setTodos] = useState([{title:"nknf",discreption:"nknddn"}]);

  // Fetch data when the component mounts
 useEffect(()=>{
  setInterval(()=>{
    fetch("https://api.vschool.io/%3Cyourname%3E/todo")
    .then(async(res)=>{
      const data= await res.json();
      setTodos(data)
    })
  },10000)
 },[])
  return (
    <div>
           {todos.map(todo=><Op key={todo._id} title={todo.title} discreption={todo.discreption}></Op>)}
    </div>
  );
}
function Op({title,discreption}){
  return(
    <div>
      <h1>{title}</h1>
      <h2>{discreption}</h2>
    </div>
  )
}
export default App;
