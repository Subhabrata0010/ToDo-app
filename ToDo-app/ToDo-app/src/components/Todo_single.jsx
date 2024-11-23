import React, { useState } from "react";

function Todo_single({ todo, index, delTodo }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <div className="todo">
        <p
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            color: isCompleted ? "gray" : "black",
            transition: "all 0.3s ease",
          }}
        >
          {todo}
        </p>
        <div className="action">
          <input type="checkbox" onChange={toggleComplete} checked={isCompleted} />
          <button onClick={() => delTodo(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo_single;

