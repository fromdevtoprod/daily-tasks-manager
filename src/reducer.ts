import {
  ADD_TODO,
  COMPLETE_TODO,
  DEFAULT_TODO_LIST,
  DELETE_TODO,
  EDIT_TODO,
} from "./constants";

let todoId = DEFAULT_TODO_LIST.length;

export function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: ++todoId, text: action.payload, isCompleted: false },
      ];
    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
}
