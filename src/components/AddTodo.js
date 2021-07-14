import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddToDo = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const handleAdd = () => {};
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

export default connect(null, { addTodo })(AddToDo);
