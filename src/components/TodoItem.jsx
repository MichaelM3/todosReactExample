const TodoItem = ({ title, description, deadline, completed }) => {
  return (
    <div className="flex w-3/4">
      <div className="border-slate-500 border-solid border-2 w-full">
        <h1>{title}</h1> 
        <p>{description}</p>
        <h2>Deadline: {deadline} days</h2>
      </div>
      <div>
        { completed ? 
          <button type="button" className="bg-green-500 h-full rounded-l-none">Completed</button>
          :
          <button type="button" className="bg-red-500 h-full rounded-l-none">Incomplete</button>
        }
      </div> 
    </div>
  )
}

export default TodoItem
