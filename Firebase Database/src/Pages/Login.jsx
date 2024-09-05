import { useState } from 'react'
import GoogleButton from 'react-google-button'
// import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
// import { auth, provider } from '../services/firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../services/firebase'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  // For Email and Password Login
  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("Login Successfully...")
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        alert("Incorrect Email OR Password")
      })
  }

  // For Google Login
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("Login Successfully...")
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <div className='banner d-flex justify-content-center align-items-center'>
        <h1 className='mt-0'>Login</h1>
      </div>
      <div style={{ display:"flex",justifyContent:"center" }}>
        <div className='card'>
          <div className='card__content'>
            <div className='login' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <form onSubmit={(e) => handleSubmit(e)} className='login-form d-flex flex-column' action="">
                Email:-<input onChange={(e) => setEmail(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Email' /><br></br><br></br>
                Password:-<input onChange={(e) => setPassword(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Password' /><br></br><br></br>
                <button className='login-btn p-3 pb-2 mb-3'>LOG IN</button>
              </form>
            </div>
          </div>
          <hr />
          <div style={{display:"flex",justifyContent:"center"}}>
            <GoogleButton onClick={handleLogin} />
          </div>
        </div>
      </div>

    </>

  )
}

export default Login
// import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
// import React, { useState } from 'react'
// import GoogleButton from 'react-google-button'
// import { auth, provider } from '../services/firebase'

// const Login = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   // For Email and Password Login
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     signInWithEmailAndPassword(auth, email, password)
//     .then((res) => {
//       alert("Login Successfully...")
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log(err)
//       alert("Incorrect Email OR Password")
//     })
//   }
//   // Auth Login
//   const handleLogin = () => {
//     signInWithPopup(auth, provider)
//       .then((res) => {
//         console.log(res)
//       }).catch((err) => {
//         console.log(err)
//       })
//   }
//   return (
//     <div>
//       <h1 >Login Page</h1>
//       <div style={{display:"flex",justifyContent:"center"}}>
//       <div className='d-flex align-items-center justify-content-center p-5' style={{ borderBottom: "2px solid #f0f0f0" }}>
//         <div className='login col-5 p-5 pt-4 p  b-4'>
//           <h3 className='mb-1'>Welcome Back !</h3>
//           <h3 className='mb-5'>Please Sign in now</h3>
//           <form onSubmit={(e) => handleSubmit(e)} className='login-form d-flex flex-column' action="">
//             <input onChange={(e) => setEmail(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Email' /><br></br>
//             <input onChange={(e) => setPassword(e.target.value)} className='p-2 ps-3 mb-3' type="text" placeholder='Password' /><br></br>
//             <button className='login-btn p-3 pb-2 mb-3'>LOG IN</button>
//           </form>
//           <GoogleButton onClick={handleLogin} />
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Login