import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/Reducers/TodoSlice';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue('');
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
