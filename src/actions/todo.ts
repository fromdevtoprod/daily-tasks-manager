export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});

export const editTodo = (id: number, text: string) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const completeTodo = (id: number) => ({
  type: COMPLETE_TODO,
  payload: id,
});
