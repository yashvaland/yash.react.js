import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import Privatepage from '../components/Privatepage'
import SignUp from '../Pages/SignUp'


const Allroutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/product' element={
                <Privatepage>
                    <Product />
                </Privatepage>
            }></Route>
            
        </Routes>
    )
}

export default Allroutes
