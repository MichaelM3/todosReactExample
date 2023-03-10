import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const Register = () => {
    const { user, setUser } = useContext(UserContext)
    const nav = useNavigate()
    const [error, setError] = useState(false)
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleRegisterSubmit = async (e) => {
        e.preventDefault()
        if (form.username !== "" && form.email !== "" && form.password !== "" && form.confirmPassword !== "" && form.password === form.confirmPassword) {
            const bodyData = {
                username: form.username,
                email: form.email,
                password_digest: form.password
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

    const handleUpdateForm = (e) => {
        const updatedForm = { ...form, [e.target.name]: e.target.value }
        setForm(updatedForm)
    }

    useEffect(() => {
        if (user) nav("/")
    }, [user])

    useEffect(() => {
        if (error) setError(false)
    }, [form])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-black p-12 rounded-3xl'>
                <h1 className='mb-6 font-bold text-3xl text-center'>Register!</h1>
                <form className='flex flex-col space-y-2' onSubmit={handleRegisterSubmit}>
                    <input
                        type="text"
                        placeholder='Username'
                        className="p-4 rounded-xl"
                        name="username"
                        onChange={handleUpdateForm}
                        value={form.username}
                    />
                    <input
                        type="text"
                        placeholder='Email'
                        className="p-4 rounded-xl"
                        name="email"
                        onChange={handleUpdateForm}
                        value={form.email}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        className="p-4 rounded-xl"
                        name="password"
                        onChange={handleUpdateForm}
                        value={form.password}
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        className="p-4 rounded-xl"
                        name="confirmPassword"
                        onChange={handleUpdateForm}
                        value={form.confirmPassword}
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
        </div>
    )
}

export default Register

