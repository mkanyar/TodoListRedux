import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => {
  console.log("todo id", todo.id);

  return (
    <ul>
      <li
        onClick={() => toggleTodo(todo.id)}
        className={`${todo && todo.completed && "completed"} `}
      >
        {todo && todo.completed ? "👌" : "👋"}
        {todo && todo.content}
      </li>
    </ul>
  );
};

export default connect(null, { toggleTodo })(Todo);
