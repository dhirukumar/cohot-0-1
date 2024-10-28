import { useEffect, useState } from 'react'
import './App.css'
import{CreateTodos} from './component/CreateTodo'
import{Todoss} from './component/Todos'



function App() { 
  const [todo, setTodo] = useState([])

useEffect(()=>{fetch("https://api.vschool.io/%3Cyourname%3E/todo") //this useEffect not work properly
.then(async function(res){
  const json=await res.json();
  setTodo(json)
})},[])
  return (
    <>
      <div>
    <CreateTodos></CreateTodos>
   <Todoss  todos={todo} ></Todoss>
      </div>
    </>
  )
}

export default App
