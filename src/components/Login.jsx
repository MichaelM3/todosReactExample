import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const Login = () => {
    const { user, setUser } = useContext(UserContext)
    const nav = useNavigate()
    const [error, setError] = useState(false)
    const [form, setForm] = useState({ username: "", password: "" })

    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify({
                username: form.username,
                password: form.password
            })
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

    const handleUpdateForm = (e) => {
        const updatedForm = { ...form, [e.target.name]: e.target.value }
        setForm(updatedForm)
    }

    useEffect(() => {
        if (user) nav("/")
    }, [user])

    useEffect(() => {
        if (error) {
            setError(false)
        }
    }, [form])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-black p-12 rounded-3xl'>
                <h1 className='mb-6 font-bold text-3xl text-center'>LOGIN!</h1>
                <form className='flex flex-col space-y-2' onSubmit={handleLoginSubmit}>
                    <input
                        type="text"
                        placeholder='Username'
                        name="username"
                        onChange={handleUpdateForm}
                        value={form.username}
                        className="p-4 rounded-xl"
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        onChange={handleUpdateForm}
                        value={form.password}
                        className="p-4 rounded-xl"
                    />
                    <button
                        type='submit'
                        className='bg-blue-400 rounded-xl hover:bg-green-400 p-2 text-xl tracking-widest'
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
        </div>
    )
}

export default Login
