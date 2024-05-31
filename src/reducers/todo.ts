import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../actions/todo";
import { DEFAULT_TODO_LIST } from "../constants";
import { Todo } from "../models/Todo";

type TodoState = Todo[];

type TodoAction = {
  type: string;
  payload?: any;
};

let todoId = DEFAULT_TODO_LIST.length;

export function todoReducer(state: TodoState, action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: ++todoId, text: action.payload, isCompleted: false },
      ];
    case COMPLETE_TODO:
      return state.map((todo: Todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    case EDIT_TODO:
      return state.map((todo: Todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
}
