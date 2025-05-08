import { useContext, useState } from 'react'
import { TodoContext, TodoContextProvider } from './Context'
import { MyTodo } from './MyTodo'

function App() {




  return (
    <TodoContextProvider >
      <MyTodo />
    </TodoContextProvider>
  )
}

export default App
