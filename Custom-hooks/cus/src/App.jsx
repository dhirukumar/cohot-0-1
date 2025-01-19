// import { useState } from 'react'
// import { Axios } from 'axios';

// import { useEffect, useState } from 'react'
// import {  useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
// import React, { useEffect } from 'react'
// function App() {

//   return (
//     <>
//      <MyComponent/>
//      {/* <Oop></Oop> */}
  
//     </>
//   )
// }

//with inbuild hooks
// function MyComponent(){
//   const [count, setCount] = useState(0)
//   var cou=()=>{
//     return <button onClick={()=>{setCount(count+1)}}>count {count}</button>
//   }
//   return cou()
// }

//with custom hooks
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

//life cycle with hooks
// import React, { useState, useEffect } from 'react';
// function MyComponent() {
//   const[depandency,setdepandency]=useState(0)
//   setInterval(() => {
//     setdepandency(depandency+1)
//     console.log(depandency)
//   }, 3000)
//   useEffect(() => {
//     console.log("component mounted")
//     return () => { //in useEffect you always use a function after return and this is shown when you unmounted(if you pass any depandency so when the depandency changes at that time tis unmounted log )
//       console.log("component unmounted")
//     };
//   }, [depandency]);//here [] you can pass depandency

//  return <>From Main Page</>
// }


//life cycle without hooks

// class MyComponent extends React.Component {
//   componentDidMount() {
//     console.log("component mounteddd")
//   }

//   componentWillUnmount() {
//     console.log("component unmounted")
//   }

//   render(){ return <div>hoooooo</div>}
// }




// import { useState, useEffect } from 'react';
// import axios from "axios";

// function MyComponent() {
//   const todo = usetodo(5); // Get todo after 3 seconds

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">Random Todo</h1>
//       {todo ? <p>{todo}</p> : <p>Loading...</p>}
//     </div>
//   );
// }

// function usetodo(n) {
//   const [todo, setTodo] = useState();

//   useEffect(()=>{
//     axios.get("https://dummyjson.com/todos/random")
//     .then((res) => {
//       setTodo(res.data.todo);
//     });
//   },[])

//   useEffect(() => {
//    setInterval(() => {
//     axios.get("https://dummyjson.com/todos/random")
//     .then((res) => {
//       setTodo(res.data.todo);
//     });
//    }, n*1000);// Fetch every 'n' seconds

//   },[todo]); // The effect will run when the component mounts and whenever 'n' changes

//   return todo;
// }


// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://dummyjson.com/todos/random")
//         .then(res => {
//           setTodos(res.data.todo);
//           setLoading(false);
//         })
//     }, n * 1000)
//   //this for rendring the firest time
//     axios.get("https://dummyjson.com/todos/random")
//       .then(res => {
//         setTodos(res.data.todo);
//         setLoading(false);
//       })

//     return () => {
//       clearInterval(value) //always cleanup the interval when it is demounted to prevint leaks
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(2);

//   if (loading) {
//     return <div> loading... </div>
//   }

//   return (
//     <>
//       <Track todo={todos} />
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo}
    
//   </div>
// }


// function useonline(){
//   const[online,setonline]=useState(window.navigator.onLine)
//   useEffect(()=>{
//   window.addEventListener("online",()=>{setonline(true)})
//   window.addEventListener("offline",()=>{setonline(false)})
//   },[])
//   return online
// }
// function App(){
//   const on=useonline()
 
//   return<>
//   {on?"you are online":"you are ofline"}
//   </>
  
// }





// import { useEffect, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(count=>count+1); // Use functional update to ensure correct state
//     }, 1000); // Interval set to 1 second
// console.log("mounted")
//     return () =>{ clearInterval(interval);} // Cleanup interval on component unmount
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <>
//       Timer is at {count}
//     </>
//   );
// }




//Debouncing is a technique used in programming to limit the rate at which a function gets invoked. It's particularly useful for controlling operations triggered by events that fire repeatedly within a short period, such as scrolling, resizing, or typing.
//you can use inbuild usedebounce lib(React-use) or make your self

//this is debounce logic
//lib(npm install react-use)
import { useDebounce } from "react-use"; //with the help of this lib you can use debounce directly you dont need to write this all logic by your self

// function usedebounce(value,timeout){
//   const[str,setstr]=useState(value)
//   useEffect(()=>{
// let time=setTimeout(() => {
//   setstr(value)
// }, timeout);
// return ()=>{clearTimeout(time)}
//   },[value])
//   return str
// }
function App(){
  const[value,setvalue]=useState();
  const debounce=useDebounce(value,500)
  // const debounce=usedebounce(value,500)
  useEffect(()=>{
    fetch
  },[debounce])
  return<>
  debounce value {debounce}
  <input type="text"
  onChange={(e)=>{setvalue(e.target.value)}}></input>
  </>
}
export default App
 