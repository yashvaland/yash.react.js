import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Product from '../Components/Product'
import Addproducts from '../Components/Addproducts'
import Descriptionpage from '../Components/Descriptionpage'
import Editpage from '../Components/Editpage'
import { Product } from '../Components/Product'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/edit/:id' element={<Editpage />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/addproduct' element={<Addproducts />}></Route>
        <Route path='/singlepage/:id' element={<Descriptionpage /> }></Route>
        <Route path='*' element={<h1>This Page Is Not Found</h1>}></Route>
    </Routes>
  )
}

export default Allroutes