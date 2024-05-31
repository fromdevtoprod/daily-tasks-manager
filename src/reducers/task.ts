import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../actions/task";
import { DEFAULT_TASK_LIST } from "../constants";
import { Task } from "../models/Task";

type TaskState = Task[];

type TaskAction = {
  type: string;
  payload?: any;
};

let currentTaskId = DEFAULT_TASK_LIST.length;

export function taskReducer(state: TaskState, action: TaskAction) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { id: ++currentTaskId, text: action.payload, isCompleted: false },
      ];
    case COMPLETE_TASK:
      return state.map((task: Task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    case DELETE_TASK:
      return state.filter((task: Task) => task.id !== action.payload);
    case EDIT_TASK:
      return state.map((task: Task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task
      );
    default:
      return state;
  }
}
