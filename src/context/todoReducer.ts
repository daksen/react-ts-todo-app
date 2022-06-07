import { Todo } from "../interfaces/interfaces";


type TodoAction =
  | {type: 'addTodo', payload: Todo}
  | {type: 'removeTodo', payload: { index: number }}
  | {type: 'toggleTodo', payload: { id: string }}

export const todoReducer = (state: Todo[], action: TodoAction):Todo[] => {
  switch (action.type) {
    case 'addTodo':
      return [...state, action.payload];
    case 'removeTodo':
      const todos = [...state];
      todos.splice(action.payload.index, 1);
      return todos
    case 'toggleTodo':
      return state.map(({...todo}) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}
