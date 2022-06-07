import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";


export const TodoList = () => {

  const { todoState } = useContext(TodoContext);

  const { todos } = todoState;

  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
