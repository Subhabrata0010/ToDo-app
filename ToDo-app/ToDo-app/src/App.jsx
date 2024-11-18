import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import ToDo from "./components/ToDo";
import TimeApp from "./components/TimeApp";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

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
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <>
      <div className="root">
        <h1>To Do Application</h1>
        <TimeApp />
        <Input task={task} writetodo={writetodo} addtodo={addtodo} />
        <br />
        <ToDo todos={todos} delTodo={delTodo} />
      </div>
    </>
  );
}

export default App;
