import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { addNewTodo, deleteTodo, fetchAllTodos } from "./operations";

const initialState = {
  todos: [],
  comments: [],
  error: null,
  activeItem: "",
};

const handleFulfilledGetTodos = (state, action) => {
  state.todos = action.payload;
};
const handleFulfilledAddTodo = (state, action) => {
  state.todos.push(action.payload);
};

const handleDeleteTodo = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
  state.comments = state.comments.filter(
    (comment) => comment.id !== action.payload.id
  );
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.fulfilled, handleFulfilledGetTodos)
      .addCase(fetchAllTodos.rejected, handleRejected)
      .addCase(addNewTodo.fulfilled, handleFulfilledAddTodo)
      .addCase(addNewTodo.rejected, handleRejected)
      .addCase(deleteTodo.fulfilled, handleDeleteTodo)
      .addCase(deleteTodo.rejected, handleRejected);
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["comments", "activeItem"],
};

export const { addNewComment, setActiveItem } = todosSlice.actions;

export const todosReducer = persistReducer(persistConfig, todosSlice.reducer);
