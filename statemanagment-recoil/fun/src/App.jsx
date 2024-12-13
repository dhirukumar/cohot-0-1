
//in this counter application you a big problem with ContextAPI is that in the Count component you nat use ContaxtAPI while it is re-render again when the child is changing so eleminate this problem we interduse state manament tools like:-recoil
// import { useContext, useState } from 'react' 
// import { Countcontaxt } from './assets/component/ComtextAPI'

// function App() {
//   const[count,setcount]=useState(0)
 
//   return (
//    <div>
// <Countcontaxt.Provider value={{count,setcount}}>
//   <Count></Count>
// </Countcontaxt.Provider>
//    </div>
//   )
// }
// function Count(){
//   console.log("count-rernder") //this is problem with ContaxtAPI thats why we introduse state managment tools like:-recoil 
//   return(
//     <div>
// <Rerendercount></Rerendercount>
// <Button></Button>
//     </div>
//   )
// }
// function Rerendercount(){
//   const {count}=useContext(Countcontaxt)
//   return(
//     <div>
// {count}
//     </div>
//   )
// }
// function Button(){
//   const {count,setcount}=useContext(Countcontaxt)
//   return(
//     <div>
// <button onClick={()=>{setcount(count+1)}}>increse</button>
// <button onClick={()=>{setcount(count-1)}}>decrese</button>
//     </div>
//   )
// }

// export default App



//this is use of recoil when you use recoil you not need worry about creat state by using usestate you make a another file to store all state like (store) inside you make each singal state inside (atom) and recoil make you code more optamise and also rerender min is only rerender those when parent rerender not when the child rernder then parent rernder 
import { countatom, even } from "./assets/store/atoms/countatomes";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
function App() { 
  
 
  return (
   <div>
 <RecoilRoot> {/* this <recoilroot> use where recoil hooks is used but you see there is no any recoil hooks is used inside Count then whey put it here see if you you want to delite this recoilroot from here and past inside Count component then it is fine because Count component hanv two child that use recoil hooks but if you pass this recoilroot here then you not need to warry about you just put component inside this understand */}
  <Count></Count>
  <Even></Even>
</RecoilRoot>

   </div>
  )
}
function Count(){
  console.log("Count")
  return(
    <div>
<Rerendercount></Rerendercount>
<Button></Button>
    </div>
  )
}
function Rerendercount(){
  console.log("Rerendercount")
  const count=useRecoilValue(countatom);  //by this you can get the value from countatom default and save it in count variable 
  return(
    <div>
{count}
    </div>
  )
}
function Button(){
  console.log("button")
  // const [count,setcount]=useRecoilState(countatom);  //this approch is not good in view point of re-render we not need a count means see
  const setcount=useSetRecoilState(countatom) //by this way you can set the default value in countatom 
  return( 
    <div> 
<button onClick={()=>{setcount(c=>c+1)}}>increse</button>
<button onClick={()=>{setcount(function(c){return c+1})}}>decrese</button>
    </div>
  )
}
function Even(){
  const co=useRecoilValue(even) //by this you can get the value from countatom default and save it in count variable
  // if(co%2 == 0 ){
  //   return ("it is even")
  // }
  return <div> 
    {/* {(co%2==0)? "it is even":null} */} 

    {/* {(co%2!==0)? "it is odd ":null} */}
    {(co%2!==0)? "it is odd ":"it is even"}

  </div>  //this is new syntax that says if co%2==0 then print "`even" this : sine says that otherwise print null
}
export default App
