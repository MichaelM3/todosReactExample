import { useEffect, useState } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'
import { todosArray } from './data'

const App = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos([...todosArray])
  }, [])

  return (
    <div className="App space-y-12">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoContainer todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
