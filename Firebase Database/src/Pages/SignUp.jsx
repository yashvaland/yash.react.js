import { useState } from 'react'
// import { auth } from '../Services/firebase'
// import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../services/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Clear any previous error

        try {
            const userEmail = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', userEmail.user);
            // Proceed with your logic for a successful signup
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('The email address is already in use by another account.');
            } else {
                setError('Failed to sign up. Please try again.');
            }
            console.error('Error signing up:', error);
        }
    }

    return (
        <>
            <div >
                <h1 style={{textAlign:"center"}}>Sign Up</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='card'>
                    <div className='card__content'>
                            <form onSubmit={(e) => handleSubmit(e)} className='login-form d-flex flex-column' action="">
                                Email:-<input onChange={(e) => setEmail(e.target.value)}  type="text" placeholder='Email' /><br></br>
                                Password:-<input onChange={(e) => setPassword(e.target.value)}  type="text" placeholder='Password' /><br></br>
                                <button className='login-btn p-3 pb-2 mb-3'>Create Account</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SignUp
