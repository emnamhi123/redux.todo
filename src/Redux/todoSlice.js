import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: uuidv4(),
        task: "Learn REACT REDUX",
        isEdited: false,
        isDone: false,
      },
    ],
    FilterItems: "All",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
      );
    },
    completeTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload ? (el.isDone = !el.isDone) : el.isDone
      );
    },
    updateTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload.id ? (el.task = action.payload.task) : el.task
      );
    },
    FilterAll: (state) => {
      state.FilterItems = "All";
    },
    FilterDone: (state) => {
      state.FilterItems = "Done";
    },
    FilterUndone: (state) => {
      state.FilterItems = "Undone";
    },
  },
});

export default todoSlice.reducer;
export const {
  addTodo,
  editTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  FilterAll,
  FilterDone,
  FilterUndone,
} = todoSlice.actions;