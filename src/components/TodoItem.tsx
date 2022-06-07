import { useCallback, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";


interface props {
  todo: Todo,
}

export const TodoItem = ({ todo }: props) => {

  const { toggleTodo } = useContext(TodoContext);

  const handleDoubleClick = useCallback(() => {
    toggleTodo(todo.id);
  }, [toggleTodo, todo]);

  return (
    <li 
      className="list-group-item list-group-item-action" 
      style={{ userSelect: 'none', cursor: 'pointer' }}
      onDoubleClick={handleDoubleClick}
    >
      <input
        disabled
        className="form-check-input me-3" 
        type="checkbox"
        checked={todo.completed}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.desc}
      </span>
    </li>
  );
}
