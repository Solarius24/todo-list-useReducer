import React from "react";
import {ACTIONS} from "../App";

export default function Todo({ todo, dispatch }) {
  return (
    <div className="todo_item">
      <span style={{ backgroundColor: todo.complete ? "green" : "#8d6927" }}>{todo.name}</span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        TOGGLE
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        DELETE
      </button>
    </div>
  );
}
