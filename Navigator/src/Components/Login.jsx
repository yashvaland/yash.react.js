import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)
    let userdata={
      email,
      password
    }
    // post data into requers api
    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      let tokenfromrequres=res.data.token
      localStorage.setItem("token",tokenfromrequres)
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <h1>Login Page</h1>
    <form action="" onSubmit={(e)=>handlesubmit(e)}> 
      <input onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Enter Your Email' />
      <input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='Enter Your Password' />
      <input type="submit" />
    </form>
    </div>
)
}

export default Login