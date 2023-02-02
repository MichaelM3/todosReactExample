import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const Login = () => {
    const { user, setUser } = useContext(UserContext)
    const nav = useNavigate()
    const [error, setError] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        if (response.status === 200) {
            const returnedUser = await response.json()

            setUser(returnedUser)
            localStorage.setItem("user", JSON.stringify(returnedUser))
        } else {
            console.log(response)
            setError(true)
        }
    }

    useEffect(() => {
        if (user) nav("/")
    }, [user])

    useEffect(() => {
        if (error) {
            setError(false)
        }
    }, [username, password])

    return (
        <div className='flex flex-col items-center justify-center bg-black rounded-3xl p-14'>
            <h1 className='mb-6'>LOGIN!</h1>
            <form className='flex flex-col space-y-2' onSubmit={handleLoginSubmit}>
                <input
                    type="text"
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="p-4 rounded-xl"
                />
                <input
                    type="password"
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="p-4 rounded-xl"
                />
                <button
                    type='submit'
                    className='bg-blue-400 rounded-xl hover:bg-green-400'
                >
                    Login
                </button>
                {!error ?
                    null
                    :
                    <span className='text-center bg-red-600 rounded-2xl p-1 bg-opacity-50'>
                        Incorrect username or password<br />Please try again
                    </span>
                }
            </form>
        </div>
    )
}

export default Login
