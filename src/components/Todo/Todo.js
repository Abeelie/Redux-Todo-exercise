import React from "react";
import './todo.css';

const ToDo = (props) => {
  const handleDelete = () => props.removeTodo(props.id);
  
  return (
    <div className="todo-container">
        <li id={props.id}>{props.name} 
            <button className="removebtn" onClick={handleDelete}>x</button>
        </li>
    </div>
  );
}

export default ToDo;