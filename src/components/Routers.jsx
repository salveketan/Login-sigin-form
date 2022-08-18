import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LandingPage from './LandingPage'
import Login from './Login'
import Register from './Register'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>

        </div>
    )
}

export default Routers
