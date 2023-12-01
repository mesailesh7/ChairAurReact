import { useState } from "react";
import { TodoProvider } from "./contexts";

const App = () => {
  const [count, setTodos] = useState({});

  return (
    <TodoProvider
      value={{ todos, deleteTodo, updateTodo, addTodo, togglecomplete }}
    >
      <h1>Hello world</h1>
    </TodoProvider>
  );
};
export default App;
