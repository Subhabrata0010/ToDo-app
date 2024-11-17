import React from "react";
import Todo_single from "./Todo_single";

function ToDo({todos,delTodo}) {
  return (
    <div className="container">
        {todos.map((todo , index)=>{
            return(
                <Todo_single todo={todo} index={index} delTodo={delTodo}/>
            )
        })}
    </div>
  );
}

export default ToDo;
