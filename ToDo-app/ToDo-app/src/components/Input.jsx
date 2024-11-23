import React from "react";

function Input({task , writetodo, addtodo}) {
  return (
    <div className="inputTask">
      <label for="tasks">Add Task : </label>
      <textarea id="tasks" placeholder="//Complete and submit Math assignment" value={task} onChange={writetodo}></textarea>
      
      <button onClick={addtodo}>+</button>
    </div>
  );
}

export default Input;
