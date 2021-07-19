import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosByVisibilityFIlters } from "../redux/selectors";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div className="todoListContainer">
      {todos.length > 0 ? (
        todos.map((todo) => <Todo todo={todo} />)
      ) : (
        <p>No todos 😄</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  const { filter } = state.visibilityFilters;
  const todos = getTodosByVisibilityFIlters(state, filter);
  return { todos };
};
export default connect(mapStateToProps)(TodoList);
