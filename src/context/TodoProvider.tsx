import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoContext } from "./TodoContext"
import { Todo } from "../interfaces/interfaces";


const INITIAL_STATE: Todo[] = [];

function broofa():string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : ((r&0x3)|0x8);
      return v.toString(16);
  });
}

function init():Todo[] {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
}

interface props {
  children: JSX.Element | JSX.Element[],
}

export const TodoProvider = ({ children }: props) => {

  const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE, init);

  const addTodo = (desc: string) => {
    dispatch({ 
      type: 'addTodo',
      payload: {
        id: broofa(),
        completed: false,
        desc,
      }
    });
  }

  const removeTodo = (index: number) => {
    dispatch({ type: 'removeTodo', payload: { index }});
  }

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toggleTodo', payload: { id }});
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
