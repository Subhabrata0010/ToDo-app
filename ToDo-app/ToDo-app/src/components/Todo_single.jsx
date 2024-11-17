import React from "react";

function Todo_single({todo,index,delTodo}) {
  return (
    <div>
      <div className="todo">
        <p>{todo}</p>
        <div className="action">
          <input type="checkbox" />
          <button onClick={()=>delTodo(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo_single;
