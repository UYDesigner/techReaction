import React, { useContext, useState } from 'react';
import { useTodo } from '../Context';


export const TodoItems = ({ todo }) => {
  const { deleteTodo, toggleCompleted, updateTodo } = useTodo() 

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.todo);

  const handleEdit = () => {
   updateTodo(todo.id, newText)
   setIsEditing(false)
  };
 

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
          className="h-5 w-5"
        />
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="bg-gray-700 text-white px-2 py-1 rounded focus:outline-none"
          />
        ) : (
          <span
            className={`text-white text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}
          >
            {todo.todo}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="text-blue-400 hover:text-blue-600"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-400 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
