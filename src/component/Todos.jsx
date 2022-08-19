import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  todoSelector,
  deleteTodo,
  markTodo,
  todoFetched,
  getTodos,
} from '../redux/Reducers/TodoSlice';
function Todos() {
  const listTodo = useSelector(todoSelector);
  const dispatch = useDispatch();
  const handleCheckbox = (id) => {
    dispatch(markTodo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div className="todo-list">
      <ul>
        {listTodo &&
          listTodo.map((items) => {
            return (
              <li key={items.id} className={items.completed ? 'active' : ''}>
                {items.title}
                <input
                  id={items.id}
                  type="checkbox"
                  checked={items.completed}
                  onChange={() => handleCheckbox(items.id)}
                />
                <button onClick={() => handleDelete(items.id)}>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Todos;
