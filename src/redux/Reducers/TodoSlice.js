import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      //   {
      //     id: 1,
      //     title: 'viec 1',
      //     completed: true,
      //   },
      //   {
      //     id: 2,
      //     title: 'viec 2',
      //     completed: false,
      //   },
      //   {
      //     id: 3,
      //     title: 'viec 3',
      //     completed: false,
      //   },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: uuidv4(),
        title: action.payload,
        completed: false,
      });
    },
    markTodo: (state, action) => {
      const todoId = action.payload;
      state.todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
      });
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    todoFetched: (state, action) => {
      state.todos = action.payload;
    },
  },
});
// async, await
export const getTodos =()=> async dispatch => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=6'
    );
    dispatch(todoFetched(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const todoSelector = (state) => state.todoReducer.todos;
export const { addTodo, deleteTodo, markTodo, todoFetched } = TodoSlice.actions;
export const todoReducer = TodoSlice.reducer;
