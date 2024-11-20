import React from "react";

function Input({task , writetodo, addtodo}) {
  return (
    <div className="inputTask">
      {/* <input type="text" placeholder="Enter Task Here" value={task} onChange={writetodo}/> */}
      <textarea placeholder="Enter Task Here..." value={task} onChange={writetodo}></textarea>
      <button onClick={addtodo}>+</button>
    </div>
  );
}

export default Input;
