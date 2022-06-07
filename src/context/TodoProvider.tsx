import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoContext } from "./TodoContext"
import { TodoState } from "../interfaces/interfaces";


function broofa():string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : ((r&0x3)|0x8);
      return v.toString(16);
  });
}

const INITIAL_STATE: TodoState = {
  todos: [
    { 
      id: broofa(),
      desc: 'Excepteur fugiat elit veniam fugiat anim.',
      completed: false,
    },
    { 
      id: broofa(),
      desc: 'Cillum irure exercitation duis nulla tempor magna.',
      completed: true,
    },
  ],
  completed: 1,
  pending: 1,
  todoCount: 2,
}

interface props {
  children: JSX.Element | JSX.Element[],
}

export const TodoProvider = ({ children }: props) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

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

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toggleTodo', payload: { id }});
  }

  return (
    <TodoContext.Provider 
      value={{
        todoState,
        addTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
