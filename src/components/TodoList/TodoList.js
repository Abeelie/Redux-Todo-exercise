import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import './todolist.css';
import { useSelector, useDispatch } from "react-redux";

const ToDoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const addToDo = (name) => {
        dispatch({ type: "ADD_TODO", name });
    };

    const removeTodo = (id) => {
        dispatch({ type: "DELETE_TODO", id });
    };

    const toDoList = todos.map(item => (
        <Todo 
           id={item.id}
           key={item.id}
           name={item.task.name} 
           removeTodo={removeTodo} 
        />
    ))

    return (
        <div className="TodoList">
            <h1>Todo App</h1>
            <TodoForm addTodo={addToDo} />
            {toDoList}
        </div>
    )
}


export default ToDoList