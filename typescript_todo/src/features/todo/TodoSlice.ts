import type { todoItem, TodoState } from "../../type/todoType";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo: todoItem = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer


