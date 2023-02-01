import { useEffect, useState, } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'

const App = () => {
    const [user, setUser] = useState(null)


    useEffect(() => {
        const foundUser = JSON.parse(localStorage.getItem("user"))
        if (foundUser) setUser(foundUser)
    }, [])

    return (
        <div className="App space-y-12">
            <Routes>
                <Route path='/' element={<Home setUser={setUser} user={user} />} />
                <Route path='/login' element={<Login user={user} setUser={setUser} />} />
                {/* <Route path='/signup' element={<Register user={user} setUser={setUser} />} /> */}
            </Routes>
        </div>
    )
}

export default App
