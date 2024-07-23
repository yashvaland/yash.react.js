import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Components/Product'
import Login from '../Components/Login'
import Addproducts from '../Components/Addproducts'
import Home from '../Components/Home'
import Privatepage from '../Components/Privatepage'
import Descriptionpage from '../Components/Descriptionpage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={
          <Privatepage>
          <Product />
          </Privatepage>
          }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/addproduct' element={<Addproducts />}></Route>
        <Route path='/singlepage/:id' element={<Descriptionpage /> }></Route>
        <Route path='*' element={<h1>This Page Is Not Found</h1>}></Route>
    </Routes>
  )
}

export default Allroutes