import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false,
    },
  ],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  togglecomplete: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
