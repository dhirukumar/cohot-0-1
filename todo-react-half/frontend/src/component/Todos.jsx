
export function Todoss({ todos }) {
    return (
      <div>
        {todos.map((todo) => (
          <Op 
            key={todo._id} 
            title={todo.title} 
            description={todo.description} 
            completed={todo.completed} 
          />
        ))}
      </div>
    );
  }
  
  function Op(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <button>
          {props.completed === true ? "Completed" : "Mark as Completed"}
        </button>
      </div>
    );
  }
  