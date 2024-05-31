import { useState } from "react";
import PropTypes from "prop-types";
import { isEnterKey, isEscapeKey } from "./helpers";

export function EditionField({ editTodo, isCompleted, text }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  function handleOnKeyDown(e) {
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
      <span className={isCompleted ? "isCompleted" : null}>{text}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}

EditionField.propTypes = {
  editTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
