import { createContext, useEffect, useState, } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
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
        <div className='flex flex-col p-6'>
            <UserContext.Provider value={{ user, setUser }}>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Register />} />
                </Routes>
            </UserContext.Provider>
        </div>
    )
}

export default App
