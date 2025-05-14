import { useDispatch, useSelector } from "react-redux";
 // ✅ Make sure this is the correct path
// ✅ Make sure this is the correct path
import type { RootState } from "../app/store";
import type { todoItem } from "../type/todoType";
import { removeTodo } from "../features/todo/TodoSlice";

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeTodo(id))
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-3">Your Todos</h2>

      <ul className="space-y-3">
        {todos.map((todo: todoItem) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow-sm"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleRemove(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
