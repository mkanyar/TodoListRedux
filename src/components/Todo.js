import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => {
  return (
    <ul>
      <li
        onClick={() => toggleTodo(todo.id)}
        className={`${todo.completed && "completed"} `}
      >
        {todo.completed ? "👌" : "👋"}
        {todo.content}
      </li>
    </ul>
  );
};

export default connect(null, { toggleTodo })(Todo);
