import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
  edit: [{ id: null, text: null }],
};

// create slice is a method inside in which mostly objects come
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // in add todo just give reference to the function dont call
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    // state hsa current state and action is current data
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
      state.edit = { id: null, text: null };
    },
    editTodo: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { addTodo, updateTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
