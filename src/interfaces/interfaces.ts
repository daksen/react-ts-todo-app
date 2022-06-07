export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  completed: number;
  pending: number;
  todoCount: number;
}
