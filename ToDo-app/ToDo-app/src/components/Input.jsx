import React from "react";

function Input({task , writetodo, addtodo}) {
  return (
    <div className="inputTask">
      <label for="txt" >Enter Task</label>
      <textarea id="txt" placeholder="//Attend Network Theory class on Friday" value={task} onChange={writetodo}></textarea>
      
      <button onClick={addtodo}>Add Task</button>
    </div>
  );
}

export default Input;
