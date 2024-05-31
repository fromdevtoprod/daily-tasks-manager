import { useReducer, useState } from "react";
import { addTodo } from "./actions";
import { DEFAULT_TODO_LIST } from "./constants";
import { isEmpty, isEnterKey } from "./helpers";
import { Todo } from "./models/Todo";
import { todoReducer } from "./reducer";
import TodoEditor from "./TodoEditor";

import "./App.css";

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, DEFAULT_TODO_LIST);

  function handleAddTodo() {
    if (isEmpty(newTodo)) return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  }

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (isEnterKey(e)) return handleAddTodo();
  }

  return (
    <>
      <h1>My daily tasks</h1>
      <input
        type="text"
        placeholder="Add task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {state.map((todo: Todo) => (
          <TodoEditor
            key={`${todo.id}-${todo.text}`}
            todo={todo}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </>
  );
}