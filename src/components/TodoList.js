import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos }) => {
  return (
    <div className="todoListContainer">
      <Todo todos={todos} />
    </div>
  );
};
