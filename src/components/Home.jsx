import { useContext } from 'react'
import TodoContainer from './TodoContainer'
import TodoForm from './TodoForm'
import { UserContext } from '../App'

const Home = () => {
    const { user, setUser } = useContext(UserContext)

    const handleSubmitNewTodo = async (title, description, deadline) => {
        const todo = { title, description, deadline, isCompleted: false, user_id: user.id }

        const response = await fetch("http://localhost:3000/api/v1/todos", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(todo)
        })
        const returnedTodos = await response.json()
        console.log(returnedTodos)
        setUser({ ...user, todos: [todo, ...user.todos] })
    }

    return (
        <div>
            {user ?
                <div className='flex flex-col'>
                    <TodoForm handleSubmitNewTodo={handleSubmitNewTodo} />
                    <TodoContainer todos={user.todos} />
                </div>
                :
                <h1>LOGIN</h1>
            }
        </div>
    )
}

export default Home
