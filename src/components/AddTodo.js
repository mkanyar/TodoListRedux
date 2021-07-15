import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddToDo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = (event) => {
    addTodo(input);
    setInput("");
    console.log("added ", input);
  };

  return (
    <div className="addTodoContainer">
      {" "}
      <h1 className="title">TodoList</h1>
      <div className="addTodo">
        <input type="text" onChange={handleChange} value={input} />
        <button className="addButton" onClick={handleAdd}>
          Add to do
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addTodo })(AddToDo);
