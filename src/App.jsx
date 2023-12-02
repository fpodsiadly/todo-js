import { Box } from './Components/Box'
import Input from './Components/Input'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, { todo, time: new Date().toLocaleTimeString() }])
  }

  const removeTodo = (id) => {
    //setTodos(todos.filter((todo) => todo.id!== id))
    setTodos(todos.filter((d, index) => index !== id))
  }

  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[750px] shadow-2xl bg-white">
        <Input handler={addTodo} />
        <Box data={todos} removeHandler={removeTodo} />
      </div>
    </div>
  )
}

export default App
