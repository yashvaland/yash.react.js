// import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Navabar = () => {
  return (
   <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"black",height:"40px",fontSize:"20px",padding:"20px"}}>
    <Link to={"/product"} style={{textDecoration:"none"}}>Products</Link>
    <Link to={"/addproduct"} style={{textDecoration:"none"}}> Add Products</Link>
    </div>
  )
}

export default Navabar