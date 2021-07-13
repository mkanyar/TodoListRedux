import React from "react";

export const AddToDo = () => {
  return (
    <div className="addTodoContainer">
      {" "}
      <h1 className="title">TodoList</h1>
      <div className="addTodo">
        <input type="text" />
        <button className="addButton">Add to do</button>
      </div>
    </div>
  );
};
