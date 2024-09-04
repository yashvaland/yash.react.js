import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Privatepage from '../components/Privatepage'
import Dashboard from '../Pages/Dashboard'

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/dashboard' element={
                <Privatepage>
                    <Dashboard />
                </Privatepage>
            }></Route>
        </Routes>
    )
}

export default Allroutes
