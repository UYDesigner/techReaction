import React, { useContext } from 'react';
import { TodoContext, useTodo } from './Context';
import { TodoForm } from './compoents/TodoForm';
import { TodoItems } from './compoents/TodoItems';

export const MyTodo = () => {
  const { todos } = useTodo()

  return (
    <div className="bg-black min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto text-white grid place-items-center px-4">
        <h1 className="text-3xl font-bold mb-6">Manage Todos</h1>

        <div className="mb-4 w-full">
          <TodoForm />
        </div>

        <div className="flex flex-col gap-y-3 w-full">
          {todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};
