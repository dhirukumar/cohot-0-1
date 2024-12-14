//this is front-end routing useing react

// import React from 'react'
// import { Suspense } from 'react';
//lazy and suspense both comes together suspense comes inside element inside <route>
// const Dashbord=React.lazy(()=>import ('./component/dashbord')); //lazy helps you to not get a big bunndeler at start when you need to one page to another page in this lazy does there work when you click to go another at then time this page comes from backend
// const Landing= React.lazy(()=>import ('./component/landing'));
// import { BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
// client side routing
// Client-side rendering (CSR) is a web development approach where the content is generated in the browser using JavaScript, typically through frameworks like React, Vue, or Angular. In CSR, the initial HTML sent from the server is usually minimal, and JavaScript on the client (browser) is responsible for fetching data, rendering views, and updating the page dynamically.
// function App() {
//   return (
//     //this top bar not changes when you switch from one route to another route because it is out of <BrowserRouter/>
    // <div>
    // <h1 style={{backgroundColor:"black",color:'white'}}>hey this is top bar</h1>
    
    {/* by this approch if you change your route it again fetch the index.html file so this is not maintain the approch of clint-side-route */}
  {/* <button onClick={()=>{
    window.location.href="/"
  }}>landing page</button>
    <button onClick={()=>{
    window.location.href="/dashbord"
  }}>dashbord page</button> */}
{/* for  ignore this upper problen we use a hook called useNavigate*/}

//     <BrowserRouter >
//   <div style={{display:"flex"}}><Changebar/><Changelen/></div>
//     <Routes>
//       <Route path="/dashbord" element={<Suspense fallback={"bhai loding ho raha hi wait kar la"}><Dashbord/></Suspense>}></Route>  {/* this suspense help to get the data when it click with lazy formate */}
//    <Route path="/" element={<Suspense fallback={"bhai loding ho raha hi wait kar la"}><Landing/></Suspense>}></Route>    {/*  suspense API when you asencrones fething data,asencrones fetchin data */}
//     </Routes>
//     </BrowserRouter>
//     </div> 
//   )
// }

// function Changebar(){
//   const navigate=useNavigate(); //(v.v.i) this navigate hook always use inside BrowserRouter that's why we put inside this component and use inside Browserouter

  //use this or simpler one that given below
  // function op(){
  //   navigate("/dashbord")
  // return(
  //   <div>
  //     <button onClick={op}>change to deshbord page</button>
  //   </div>
  // )
// }
  //this is simpler one
// return  <button onClick={()=>{navigate("/dashbord")}}>change to das</button>
//   }

// function Changelen(){
//   const navigate=useNavigate();

//   function op(){
//     navigate("/")
//   }
//   return(
//     <div>
//       <button onClick={op}>change to lending page</button>
//     </div>
//   )
// }
 



//props-drilling problen solved by context API

// function App(){
//   const[count,setcount]=useState(0)
//   return(
//     <div>
// <Count count={count} setcount={setcount}/>
 {/* <Button count={count} setcount={setcount}/> heare i learn one important things that when you pass a component in App function and you use state that define in App function abd you use the state function in this component so for use this state in this component the component know the state for that when you use this component in the App function inside this you need to pass props for that state like:-count={cont} setcount={setcount}  */}
//     </div>
//   )
// }

// function Count({count ,setcount}){
//   return(
//     <div>
// {count}
//  <Button count={count} setcount={setcount}/>  {/* if you pass this component inside this count component you see big problem called pros-drilling what is this you see count not neeed the setcount but it called because the setcont stste pass in this component like:-button component it need a setcount so for that count take setcount as a pros .let take a exemple when lot's of component pass in this component at that time this count component take lot's of states for there children component while count not need this all states and this problem solved by context API */}
//     </div>
//   )
// }
// function Button({count,setcount}){ //if you use satate inside any component and in this component the state is not present so you need to call this state like in this you call the state as a props and use inside thsi component
//   return <div>
// <button onClick={()=>{setcount(count+1)}}>increse</button>
// <button onClick={()=>{setcount(count-1)}}>decrese</button>
//     </div>
  
// }

//this is real exemple of props-drelling problem
// import { useState } from "react"
// function App(){
//   const[count,setcount]=useState(0)
//   return(
//     <div>
// <Count count={count} setcount={setcount}></Count>
//     </div>
//   )
// }
// function Count({count,setcount}){
// return(
// <div>
//  <Rendercount count={count}></Rendercount>
//  <Button count={count} setcount={setcount}></Button>
//  </div>
// )
// }
// function Rendercount({count}){
// return(
//  <div> {/* remember one thing that when you define props it always inside <div> or <span> or<> */}
// {count}
// </div>
// )
// }
// function Button({count,setcount}){
//   return(
// <div>
// <button onClick={()=>{setcount(count+1)}}>increse</button>
// <button onClick={()=>{setcount(count-1)}}>decrese</button>
// </div>
//   )
// }
// export default App



//context API solve the problen of props-drilling it also called state management tool
import { useContext, useState } from "react"
import {CountContext} from "./component/contextAPI"
function App(){
  const[count,setcount]=useState(0)
  return(
    <div>
 <CountContext.Provider value={{count, setcount}}> {/* we give another {} in this because in Button component we need two prope count and setcount so for call in singal in this is used at that palce like this const {count,setcount} that's why we put inside this again {} when you call a singal state at that time also you use this like this cont {count}*/}
<Count></Count>
</CountContext.Provider> 
    </div>
  )
}
function Count(){
return(
<div>
 <Rendercount ></Rendercount>
 <Button></Button>
 </div>
)
}
function Rendercount(){
  const {count}=useContext(CountContext)
return(
 <div> 
{count}
</div>
)
}
function Button({}){
   const {count,setcount}=useContext(CountContext)
  return(
<div>
<button onClick={()=>{setcount(count+1)}}>increse</button>
<button onClick={()=>{setcount(count-1)}}>decrese</button>
</div>
  )
}
export default App
