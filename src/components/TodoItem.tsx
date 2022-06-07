import { useCallback, useContext, MouseEvent } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";


interface props {
  todo: Todo,
  index: number,
}

export const TodoItem = ({ todo, index }: props) => {

  const { removeTodo, toggleTodo } = useContext(TodoContext);

  const handleDoubleClick = useCallback(() => {
    toggleTodo(todo.id);
  }, [toggleTodo, todo]);

  const handleRemove = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeTodo(index);
  }, [removeTodo, index]);

  return (
    <li 
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ userSelect: 'none', cursor: 'pointer' }}
      onDoubleClick={handleDoubleClick}
    >
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.desc}
      </div>
      <div className="ms-2" style={{ width: '24px'}}>
        <button
          type="button"
          className="btn-close"
          onClick={handleRemove}
        />
      </div>
    </li>
  );
}
