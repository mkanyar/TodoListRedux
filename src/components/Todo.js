import React from "react";

export const Todo = () => {
  return (
    <ul>
      {["Mike", "Raissa", "Nancy", "Samantha"].map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};
