import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../services/firebase'

const Navbar = () => {
    const handleLogout = () => {
        signOut(auth)
            .then((res) => {
                alert("Logout....")
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "50px", backgroundColor: "black" }}>
            <Link to={"/product"} style={{ textDecoration: "none" }}>Products</Link>
            <Link to={"/login"} style={{ textDecoration: "none" }}>Login</Link>
            <Link to={"/signup"}style={{ textDecoration: "none" }}>Signup</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar