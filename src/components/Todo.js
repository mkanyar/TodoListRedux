import React from "react";

export const Todo = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.content}</li>
      ))}
    </ul>
  );
};
