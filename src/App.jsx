import { createContext, useEffect, useState, } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

export const UserContext = createContext()

const App = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const foundUser = JSON.parse(localStorage.getItem("user"))
        if (foundUser) setUser(foundUser)
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Register />} />
            </Routes>
        </UserContext.Provider>
    )
}

export default App
