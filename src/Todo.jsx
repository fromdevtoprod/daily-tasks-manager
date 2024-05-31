import PropTypes from "prop-types";
import { completeTodo, deleteTodo, editTodo } from "./actions";
import { EditionField } from "./EditionField";

export function Todo({ todo: { id, isCompleted, text }, dispatch }) {
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
        editTodo={(newText) => dispatch(editTodo(id, newText))}
      />
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
