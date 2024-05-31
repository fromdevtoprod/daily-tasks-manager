import { useState } from "react";
import AddButton from "./buttons/Add";
import { isEmpty, isEnterKey } from "../helpers";

type AddTaskProps = {
  onAddTask: (task: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (isEmpty(newTask)) return;
    setNewTask("");
    onAddTask(newTask);
  }

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (isEnterKey(e)) return handleAddTask();
  }

  return (
    <div className="mt-10 flex space-x-4">
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Add task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
      <AddButton onClick={handleAddTask} />
    </div>
  );
}
