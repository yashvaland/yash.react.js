import React from 'react'
import GoogleButton from 'react-google-button'
// import { auth, provider } from '../services/firebase'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../services/firebase'

const Login = () => {
  const handleLogin = () => {
    signInWithPopup(auth,provider)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
return (
  <div>
    <h1>Login Page</h1>
    <GoogleButton onClick={handleLogin} />
  </div>
)
}

export default Login