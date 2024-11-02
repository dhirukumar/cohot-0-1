//all hooks




import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [todo,setTodo]=useState([])

useEffect(()=>{
  fetch("https://api.vschool.io/%3Cyourname%3E/todo")
  .then(async(res)=>{
 let jb= await res.json()
 setTodo(jb)
  })
},[]) //[] show that when the server hit or mounted at that time useeffect call it one time after that it not call again 

  return (
    
      <div>
    {todo.map((todos)=>(<To title={todos.title} description={todos.description}></To>))}
      </div>
    
   
  )
}

function To({title,description}){
  return(
    <div>
      {title}
      <br></br>
      {description}
     <br></br><br></br>
    </div>
  )
}




//useEffect
import { useEffect, useState } from "react"

function App(){
 const[id,setId]=useState(5)
return(
<div >
    <button onClick={()=>{
      setId(1)
    }}>1</button>
    <button onClick={()=>{
      setId(2)
    }}>2</button>
    <button onClick={()=>{
      setId(3)
    }}>3</button>
    <button onClick={()=>{
      setId(4)
    }}>4</button>
    <Todo  id={id} ></Todo>
    </div>
)
}

function Todo({id}){
  const[todo,setTodo]=useState([])
  useEffect(()=>{
 fetch("https://jsonplaceholder.typicode.com/todos?id="+id)
 .then(async(res)=>{
  const op= await res.json()
  // if(op.length>0){
  //   setTodo(op[0])
  // }
  setTodo(op[0]);
 }
)
  },[id]) //[id] is so important because it says that when you change the id useeffect call it again 
  return(
    <div>
      id:{todo.id}
      <br></br>
   {todo.title}
  {/* {todo.description} */}
    </div>
  )
}





//usememo
import { useEffect, useMemo, useState } from "react"
function App(){
const [counter,setcon]=useState(0)
 const [value,setvalue]=useState(1)
 const[summ,setsumm]=useState(0)

 //1 use this one
const memo=useMemo(()=>{
  let sum =0
  for(let i=1;i<=value;i++){
    sum=sum+i
  }
return(sum) //this return makes the diffrence b/w the useeffect and usememo in useeffect after for loop we don't have option to return so we need to set some state but in useMemo 
},[value])


//2.use this one but in this case you need one more stats to set the sum
const ap=useEffect(()=>{
  let sum=0
  for(let i=0;i<=value;i++){
    sum+=i
  }
  setsumm(sum)
},[value])

return <>
  <input  type="number" placeholder="sum of 1 to input" onChange={function(e){
  const ap=parseInt(e.target.value) //it is most important to parse this value into int otherwise e.target.vale is returning the string and this code is not working
  setvalue(ap);
  }} ></input> 
  <br></br>
  the sum from 1 to {value} is {memo}
  <br></br>
  <button onClick={()=>{setcon(counter+1)}}>counter:{counter}</button>
    </>
}





//useCallback is used when you use react.memo to not re-render without change the value inthis when you define any props and that props call so you seen that it re-render again and again so for stoping this re-render you use useCallback
import { memo, useCallback, useState } from "react"
function App(){
  const[count,setcount]=useState(0)
// const at=useCallback
 const at=useCallback(()=>{
  console.log("knmknkr");
},[])
 return(
    <div>
<Op op={at}></Op>
 <button onClick={()=>{
  setcount(count+1)}}>count:{count}</button>
    </div>
  )
}
const Op=memo(({op})=>{ //useCallback use in this type of case whe you define a props inside a memo function to stop the re-render but you see that the re-render happen because the props function so stop the re-render you need to rapp this props function insude useCallback to memorise the input
  console.log("mknknd")
})

//useRef

import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [tax, settax] = useState(2000)

 const divRef=useRef()

 useEffect(()=>{
  setInterval(()=>{
    divRef.current.innerHTML=10;
  },5000)},[])
  return (

      <div>
      your tax is <div ref={divRef}>{tax}</div>
      </div>
  )

}
export default App


