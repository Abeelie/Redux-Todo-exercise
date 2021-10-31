import { v4 as uuid } from "uuid";

const INITIAL_STATE = {todos: []}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
          return {...state, todos: [...state.todos, {id: uuid(), task: action.name }]};
        case "DELETE_TODO":
          return {...state, todos: state.todos.filter((todo) => todo.id !== action.id)};
        default:
          return state;
    }
}

export default reducer