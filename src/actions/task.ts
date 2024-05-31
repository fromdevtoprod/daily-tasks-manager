export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const addTask = (text: string) => ({
  type: ADD_TASK,
  payload: text,
});

export const deleteTask = (id: number) => ({
  type: DELETE_TASK,
  payload: id,
});

export const editTask = (id: number, text: string) => ({
  type: EDIT_TASK,
  payload: { id, text },
});

export const completeTask = (id: number) => ({
  type: COMPLETE_TASK,
  payload: id,
});
