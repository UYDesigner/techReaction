import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

export const Todo = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(removeTodo(id));
    };
    const update =(id, newText)=>{
        
    }

    return (
        <div className="w-full max-w-md mx-auto mt-6">
            <h2 className="text-xl font-semibold mb-4">Todo List</h2>
            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-white shadow p-3 rounded-lg border"
                    >
                        <span>{todo.text}</span>
                        <button
                            onClick={() => remove(todo.id)}
                            className="text-red-600 hover:text-red-800 font-bold"
                        >
                            ×
                        </button>
                        <button onClick={() => update(todo.id, newText)}
                            className="text-red-600 hover:text-red-800 font-bold">Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
