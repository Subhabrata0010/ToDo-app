import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDo from "./components/ToDo";
import TimeApp from "./components/TimeApp";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  function writetodo(e) {
    setTask(e.target.value);
  }

  function addtodo() {
    if (task != "") {
      setTodos((prevTodos) => [...prevTodos, task]);
      setTask("");
    }
  }

  

  function delTodo(todoIndex) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos((prevTodos) =>
        prevTodos.filter((prevTodos, prevTodosIndex) => {
          return prevTodosIndex != todoIndex;
        })
      );
    }
  }

  return (
    <>
      <div className="root">
        <h1>ToDoism</h1>
        <TimeApp />
        <Input task={task} writetodo={writetodo} addtodo={addtodo} />
        <br />
        <ToDo todos={todos} delTodo={delTodo} />
        <Analytics/>
      </div>
    </>
  );
}

export default App;
