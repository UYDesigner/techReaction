import React, { useContext, useState } from 'react';
import { TodoContext, useTodo } from '../Context';

export const TodoForm = ({ onAdd }) => {
    const [todo, setTodo] = useState("");
    const {  addTodo, } = useTodo()

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo(todo); // pass only the string
        setTodo("");
    };
    

    return (
        <form onSubmit={add} className="flex gap-3 mb-6 w-full">
            <input
                type="text"
                placeholder="Write a todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="flex-1 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
                Add
            </button>
        </form>
    );
};
