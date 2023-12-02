import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../featuers/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const editTodo = useSelector((state) => state.edit);

  const addTodoHandler = (e) => {
    e.preventDefault();
    editTodo.id == null
      ? dispatch(addTodo(input))
      : dispatch(updateTodo({ id: editTodo.id, text: input }));
    setInput("");
  };

  useEffect(() => {
    setInput(editTodo.text);
  }, [editTodo]);

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="Submit">
        {editTodo.id === null ? "Add Todo" : "Update Todo"}
      </button>
    </form>
  );
};

export default AddTodo;
