import { useState } from "react";
import { isEnterKey, isEscapeKey } from "./helpers";

type EditionFieldProps = {
  editTodo: (newText: string) => void;
  isCompleted: boolean;
  text: string;
};

export default function EditionField({
  editTodo,
  isCompleted,
  text,
}: EditionFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (isEnterKey(e)) return editTodo(newText);
    if (isEscapeKey(e)) return setIsEditing(false);
  }

  if (isEditing) {
    return (
      <>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={handleOnKeyDown}
          autoFocus={true}
        />
        <button onClick={() => editTodo(newText)}>Save</button>
      </>
    );
  }

  return (
    <>
      <span className={isCompleted ? "isCompleted" : undefined}>{text}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}
