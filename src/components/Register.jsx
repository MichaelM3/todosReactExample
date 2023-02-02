import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const Register = () => {
    const { user, setUser } = useContext(UserContext)
    const nav = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(false)

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        if (username !== "" && email !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword) {
            const bodyData = {
                username,
                email,
                password_digest: password
            }

            const response = await fetch("http://localhost:3000/api/v1/users", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                },
                body: JSON.stringify(bodyData)
            })
            if (response.status === 201) {
                const returnedUser = await response.json()
                setUser(returnedUser)
                localStorage.setItem("user", JSON.stringify(returnedUser))
            } else {
                setError(true)
            }
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        if (user) nav("/")
    }, [user])

    useEffect(() => {
        if (error) setError(false)
    }, [username, email, password, confirmPassword])

    return (
        <div className='flex flex-col items-center justify-center bg-black rounded-3xl mx-32 py-14'>
            <h1 className='mb-6 font-bold text-3xl text-center'>Register!</h1>
            <form className='flex flex-col space-y-2' onSubmit={handleRegisterSubmit}>
                <input
                    type="text"
                    placeholder='Username'
                    className="p-4 rounded-xl"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input
                    type="text"
                    placeholder='Email'
                    className="p-4 rounded-xl"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder='Password'
                    className="p-4 rounded-xl"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    placeholder='Confirm Password'
                    className="p-4 rounded-xl"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
                <button type='submit' className='p-4 bg-blue-400 rounded-xl p-2 text-xl tracking-widest'>
                    Register
                </button>
                {!error ?
                    null
                    :
                    <span className='text-center bg-red-600 rounded-2xl p-1 bg-opacity-50'>
                        Invalid input!
                    </span>
                }
            </form>
        </div>
    )
}

export default Register

