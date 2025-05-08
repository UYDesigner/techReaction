import { createContext, useContext, useEffect, useState } from 'react'

export const TodoContext = createContext();

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoText) => {
        const newTodo = {
            id: Date.now(),
            todo: todoText,
            completed: false,
        };
        setTodos((prev) => [newTodo, ...prev]);
    };

    const updateTodo = (id, newText) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, todo: newText } : todo
            )
        );
    };


    const deleteTodo = (id) => {
        setTodos((prev) =>
            prev.filter((todo) => todo.id !== id)
        )
    };

    const toggleCompleted = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };


    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }} >
            {children}
        </TodoContext.Provider>
    )
}