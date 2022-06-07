import { useContext, useState, useCallback, ChangeEvent, KeyboardEvent } from 'react'
import { TodoContext } from '../context/TodoContext'


export const TodoHeader = () => {

  const { addTodo } = useContext(TodoContext);

  const [desc, setDesc] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  }

  const handlePress = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && desc.length > 0) {
      addTodo(desc);
      setDesc('');
    }
  }, [addTodo, desc]);

  return (
    <>
      <h1 className="text-light mb-3">TODOS:</h1>
      <div className="input-group mb-3">
        <input
          value={desc}
          type="text"
          className="form-control"
          placeholder="Description..."
          onChange={handleChange}
          onKeyDown={handlePress}
        />
      </div>
      <hr className="text-light" />
    </>
  );
}
