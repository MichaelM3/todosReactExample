import TodoItem from "./TodoItem"

const TodoContainer = ({ todos, setTodos }) => {

  const displayTodos = todos.map((todo, i) => <TodoItem key={i} {...todo} setTodos={setTodos} /> )

  return (
    <div className="flex flex-col pt-12 space-y-2">
     {displayTodos} 
    </div>
  )
}

export default TodoContainer
