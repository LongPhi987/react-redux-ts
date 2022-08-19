import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '../Reducers/TodoSlice';

export const store = configureStore({
  reducer: {
    todoReducer,
  },
});
