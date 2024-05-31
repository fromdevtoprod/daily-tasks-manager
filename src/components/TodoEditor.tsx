import { completeTodo, deleteTodo, editTodo } from "../actions/todo";
import EditionField from "./EditionField";
import { Todo } from "../models/Todo";

type TodoEditorProps = {
  todo: Todo;
  dispatch: React.Dispatch<any>;
};

export default function TodoEditor({
  todo: { id, isCompleted, text },
  dispatch,
}: TodoEditorProps) {
  return (
    <li key={id}>
      <input
        type="checkbox"
        onChange={() => dispatch(completeTodo(id))}
        checked={isCompleted}
      />
      <EditionField
        isCompleted={isCompleted}
        text={text}
        editTodo={(newText: string) => dispatch(editTodo(id, newText))}
      />
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </li>
  );
}
