import { useState } from "react";
import { addTodo } from "../features/todo/TodoSlice";
import { useDispatch } from "react-redux";



export const TodoField = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const handleClick=(e : React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(addTodo(inputText))
   setInputText("")
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add
        </button>
      </div>


    </div>
  );
};
