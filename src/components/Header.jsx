import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

const Header = () => {

    const { user, setUser } = useContext(UserContext)

    const handleLogoutClick = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <div className='flex justify-between pb-2 items-center'>
            <h1 className='text-xl font-bold'>TODO APP!</h1>
            {user ?
                <Link to="/login" className='bg-red-400 p-2' onClick={handleLogoutClick}>
                    Sign Out
                </Link>
                :
                <div className='space-x-4'>
                    <Link to="/login" className='bg-blue-400 p-2 rounded-lg'>Login</Link>
                    <Link to="/signup" className='bg-blue-400 p-2 rounded-lg'>Register</Link>
                </div>
            }
        </div>
    )
}

export default Header
