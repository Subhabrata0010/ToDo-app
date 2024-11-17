import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDo from "./components/ToDo";

function App() {
  const[task,setTask]=useState('')
  const[todos,setTodos]=useState([])

  function writetodo(e) {
    setTask(e.target.value)
  }

  function addtodo() {
    if(task!=''){
      setTodos(prevTodos => [...prevTodos , task])
      setTask('')
    }
  }

  function delTodo(todoIndex){
    setTodos(
      (prevTodos)=> prevTodos.filter((prevTodos, prevTodosIndex)=>{
        return prevTodosIndex != todoIndex;
      })
    )  
  }

  console.log(todos)

  return (
    <>
      <h1>To Do App</h1>
      <Input task={task} writetodo={writetodo} addtodo={addtodo}/>
      <br />
      <ToDo todos={todos} delTodo={delTodo}/>
    </>
  );
}

export default App;
