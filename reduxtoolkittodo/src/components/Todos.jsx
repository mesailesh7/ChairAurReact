import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../featuers/todo/todoSlice";
import { updateTodo } from "../featuers/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div>{todo.text}</div>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
              <button
                onClick={() =>
                  dispatch(editTodo({ id: todo.id, text: todo.text }))
                }
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
