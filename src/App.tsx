import { useReducer } from "react";
import { addTask } from "./actions/task";
import { DEFAULT_TASK_LIST } from "./constants";
import { Task } from "./models/Task";
import { taskReducer } from "./reducers/task";
import TaskEditor from "./components/TaskEditor";
import AddTask from "./components/AddTask";

export default function App() {
  const [state, dispatch] = useReducer(taskReducer, DEFAULT_TASK_LIST);
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl text-center font-bold underline">My tasks</h1>
      <AddTask onAddTask={(newTask: string) => dispatch(addTask(newTask))} />
      <ul className="mt-10">
        {state.map((task: Task) => (
          <TaskEditor
            key={`${task.id}-${task.text}`}
            task={task}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
}
