import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";


export const TodoList = () => {

  const { todos } = useContext(TodoContext);

  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </ul>
  );
}
