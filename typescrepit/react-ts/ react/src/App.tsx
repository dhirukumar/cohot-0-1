// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Print title='kjndnd' dis='njdndn' done={true} />
    </>
  )
}
//in ts you can write object like that
// interface todo{
//   title:string,
//   dis:string,
//   done:boolean
// }
 
type todo={
  title:string,
  dis:string,
  done?:boolean //you can pass this argement or not 
}
function Print(todos:todo){
  return<div>
    <h1>{todos.title}</h1>
    <h2>{todos.dis}</h2>
    <h3>{todos.done?"completed":"not completed"}</h3>
  </div>
}

export default App
