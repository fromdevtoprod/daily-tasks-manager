import { useState } from "react";
import { isEnterKey, isEscapeKey } from "../helpers";
import EditButton from "./buttons/Edit";
import SaveButton from "./buttons/Save";

type EditionFieldProps = {
  editTask: (newText: string) => void;
  isCompleted: boolean;
  text: string;
};

export default function EditionField({
  editTask,
  isCompleted,
  text,
}: EditionFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (isEnterKey(e)) return save();
    if (isEscapeKey(e)) return stopEditing();
  }

  function save() {
    editTask(newText);
    stopEditing();
  }

  function stopEditing() {
    setNewText(text);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={handleOnKeyDown}
          autoFocus={true}
        />
        <SaveButton onClick={() => save()} />
      </>
    );
  }

  let textClassName = isCompleted ? "line-through" : undefined;
  return (
    <>
      <div className={textClassName}>{text}</div>
      <EditButton onClick={() => setIsEditing(true)} />
    </>
  );
}
