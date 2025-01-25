"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { useState } from 'react'
require("./App.css");
function App() {
    return (<>
      <Print title='kjndnd' dis='njdndn' done={true}/>
    </>);
}
function Print(todos) {
    return <div>
    <h1>{todos.title}</h1>
    <h2>{todos.dis}</h2>
    <h3>{todos.done ? "completed" : "not completed"}</h3>
  </div>;
}
exports.default = App;
