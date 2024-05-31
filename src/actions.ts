import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
});
