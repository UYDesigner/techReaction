import { configureStore } from "@reduxjs/toolkit";
import  todoReducer from "../features/todo/TodoSlice"
export const store = configureStore({
  reducer: {
    todo: todoReducer, // ✅ key must match slice name (or any label you want)
  },
});

// Optional: Infer the types of RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
