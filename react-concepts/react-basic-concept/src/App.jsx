//hook in react
import { useState } from 'react'

//counter code
// function App() {
//   //this is state
// const[count,setCount]=useState(0)
 
// function onclickhandler(){
//   setCount(count+1)
// }
//   return (
//     //  //  this is component
//     <div>
//       <button onClick={onclickhandler}>count {count}</button>
//     </div>
//   )
     
// }
// export default App



// //counter code in anothe method 
// function App() {
//   // This is the state
//   const [count, setCount] = useState(0);

//   return (
//     // This is the component 
//     <div>
//       <CustomButton count={count} setCount={setCount} ></CustomButton>
//       {/* <CustomButton count={count-1} setCount={setCount} />
//       <CustomButton count={count+1} setCount={setCount} /> */}
//     </div>
//   );
// }

// // Make our own component by making your own component you can call this many times with some changes
// function CustomButton(props) {
//   function handleClick() {
//     props.setCount(props.count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       count {props.count}
//     </button>
//   );
// }


//todo react
function App(){

const[todo,setTodo]=useState([
  {
    title:"go to gym",
    discreption:"go to gym from 10pm-12pm",
    work:"true"

  },
{
  title:"go to college",
  discreption:"go to college from 1pm-6pm",
  work:"false"

 },
 {
  title:"go to school",
  discreption:"go to school from 1pm-6pm",
  work:"true"
}
]) 

//IMPORTANT AFTER RETURN YOU NEED TO GIVE OPEN BRACKET IN SAME LINE OR PUT HOLE CODE IN SAME LINE WITHOUT BRACKET

function addtodo(){
setTodo([...todo,{ //...todo get all todo list that we define above and after this, we add new todo{ }
  title:"no work",
  discreption:"go and sleep"
}])
}
return( <div>
{/* (<Todos title={todo[0].title} discreption={todo[0].discreption}></Todos>,
<Todos title={todo[1].title} discreption={todo[1].discreption}></Todos>)  */}

{/* Render the todos dynamically */}
{/*  map() function is used to iterate over arrays and render multiple components dynamically. It is a common way to render a list of elements based on an array of data */}
<button onClick={addtodo}>add random todo</button>
{todo.map(function(todo){ //why we give curly bracket outside because in react we write js code in {js code }
 return <Todos title={todo.title} discreption={todo.discreption}/> //<this is new way  to call a function

})
}
</div>
)
}

//component
function Todos(props){ //this is new way to create function by giving capital letter in firest

  //IMPORTANT AFTER RETURN YOU NEED TO GIVE OPEN BRACKET IN SAME LINE OR PUT HOLE CODE IN SAME LINE WITHOUT BRACKET
  return( <div>
  <h1 style={{color: 'darkblue', //firest bracket for js and 2nd one for html
    fontSize: '24px',
    fontWeight: 'bold',}}>{props.title}</h1>,
  <h2>{props.discreption}</h2>
  </div>)

}



export default App;