import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const Login = () => {
    const { user, setUser } = useContext(UserContext)
    const nav = useNavigate()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const bodyData = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        try {
            const response = await fetch("http://localhost:3000/api/v1/login", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                },
                body: JSON.stringify(bodyData)
            })
            const returnedUser = await response.json()
            setUser(returnedUser)
            localStorage.setItem("user", JSON.stringify(returnedUser))
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        if (user) nav("/")
    }, [user])

    return (
        <div className='bg-black rounded-3xl p-14'>
            <h1 className='mb-6'>LOGIN!</h1>
            <form className='flex flex-col space-y-2' onSubmit={handleLoginSubmit}>
                <input
                    type="text"
                    placeholder='Username'
                    ref={usernameRef}
                    defaultValue=""
                    className="p-4 rounded-xl"
                />
                <input
                    type="password"
                    placeholder='Password'
                    ref={passwordRef}
                    defaultValue=""
                    className="p-4 rounded-xl"
                />
                <button type='submit' className='bg-blue-400'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
