import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getById } from "../redux/selectors";

const TodoList = ({ todos }) => {
  return (
    <div className="todoListContainer">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  const todos = getById(state);
  return { todos };
};
export default connect(mapStateToProps)(TodoList);
