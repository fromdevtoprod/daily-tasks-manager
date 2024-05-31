import { completeTask, deleteTask, editTask } from "../actions/task";
import EditionField from "./EditionField";
import { Task } from "../models/Task";
import DeleteButton from "./buttons/Delete";

type TaskEditorProps = {
  task: Task;
  dispatch: React.Dispatch<any>;
};

export default function TaskEditor({
  task: { id, isCompleted, text },
  dispatch,
}: TaskEditorProps) {
  return (
    <li className="flex justify-center items-center space-x-2 m-5" key={id}>
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => dispatch(completeTask(id))}
        checked={isCompleted}
      />
      <EditionField
        isCompleted={isCompleted}
        text={text}
        editTask={(newText: string) => dispatch(editTask(id, newText))}
      />
      <DeleteButton onClick={() => dispatch(deleteTask(id))} />
    </li>
  );
}
