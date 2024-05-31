import { useReducer, useState } from "react";
import { addTodo } from "./actions";
import { DEFAULT_TODO_LIST } from "./constants";
import { isEmpty, isEnterKey } from "./helpers";
import { todoReducer } from "./reducer";
import { Todo } from "./Todo";

import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, DEFAULT_TODO_LIST);

  function handleAddTodo() {
    if (isEmpty(newTodo)) return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  }

  function handleOnKeyDown(e) {
    if (isEnterKey(e)) return handleAddTodo();
  }

  return (
    <>
      <h1>Todo list</h1>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {state.map((todo) => (
          <Todo
            key={`${todo.id}-${todo.text}`}
            todo={todo}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
