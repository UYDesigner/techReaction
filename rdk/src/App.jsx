import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { AddTodo } from './components/AddTodo'
import { Todo } from './components/Todo'

function App() {

  return (
    <>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
