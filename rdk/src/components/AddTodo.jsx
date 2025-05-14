import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';
export const AddTodo = () => {

    const [text, settext] = useState("")
    const dispatch = useDispatch()
    const add = (e) => {
        e.preventDefault();
        dispatch(addTodo(text))
        settext("")

    };

    return (
        <form onSubmit={add} className="flex gap-3 p-4 w-full max-w-md mx-auto">
            <input
                type="text"
                placeholder="Enter todo"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={text}
                onChange={(e)=>settext(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Add
            </button>
        </form>
    );
};
