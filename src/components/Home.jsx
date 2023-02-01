import { useContext } from 'react'
import TodoContainer from './TodoContainer'
import TodoForm from './TodoForm'
import { UserContext } from '../App'

const Home = () => {
    const { user, setUser } = useContext(UserContext)

    const handleSubmitNewTodo = (title, description, deadline) => {
        const todo = { title, description, deadline, isCompleted: false }

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
