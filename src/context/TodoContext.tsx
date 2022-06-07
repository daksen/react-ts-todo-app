import { createContext } from "react";
import { Todo } from "../interfaces/interfaces";


export type TodoContextProps = {
  todos: Todo[];
  addTodo: (desc: string) => void;
  removeTodo: (index: number) => void;
  toggleTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
