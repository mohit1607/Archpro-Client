import { useContext } from 'react'
import React, { useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const {auth, setUser} = useContext(FirebaseContext)

  // false -> Login form, true -> signup form
  const [toggle, setTogggle] = useState(false)

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  const [signupForm, setSignupForm] = useState({
    email: '',
    confirm_password:'',
    password: '',
})

// navigation
const navigate = useNavigate()

//toast 
const loginToast = (status = '') => {
    if(status === 'success') {
        toast.success('Logged in successfully')
        return
    }
    toast.error('Login failed')
}

const signInToast = (status = '') => {
    if(status === 'success') {
        toast.success('You have signed up successfully')
        return
    }
    toast.error('Sign up failed')
}



const signUp = (email: string, password: string) => {
    try{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("user", user); 
                signInToast('success')
                setTogggle(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("error code " + errorCode, errorMessage);
                // alert('something went wrong try again with correct credentials')
                signInToast()
            });
    }catch(e){
        console.error(e);
        // alert('Some unknown error occured')
        signInToast()
    }
    setSignupForm({
        email: '',
        confirm_password: '',
        password: '',
    })
}


const logIn = (email: string, password: string) => {
    try{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // logged in 
                const user = userCredential.user;
                console.log("user", user);
                loginToast('success')
                setUser(user.uid)
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("error code " + errorCode, errorMessage);
                // alert('something went wrong try again with correct credentials')
                loginToast()
            });
    }catch(e){
        console.error(e);
        // alert('Some unknown error occured')
        loginToast()
    }
    setLoginForm({
        email: '',
        password: ''
    })
}

const handleSubmit = () => {
    if(toggle){
        const {email, password, confirm_password} = signupForm
        if(!(email && password && confirm_password)){
            // alert('fill all the required fields')
            toast.error('Fill all the required fields')
            return
        }
        if(password !== confirm_password) {
            // alert("the passwords does'nt match")
            toast.error("Both passwords doesn't match")
            return
        }
        signUp(email, password)
    }
    else if(!toggle) {
        const {email,password} = loginForm
        if(!(email && password)) {
            // alert('fill all the required fields')
            toast.error('fill all the required fields')
            return
        }
        logIn(email, password)
    }
}



  return (
    <main className="min-h-screen p-8 overflow-hidden flex w-full grid place-items-center">
        {/* this is signup form */}
    { toggle ?   (<div className="artboard-horizontal bg-#212121 rounded-lg shadow-lg bg-blue-50 w-[25rem] px-10 py-8 flex flex-col gap-3">
            <h2 className='text-2xl text-black font-semibold text-center'>Sign up </h2>
            {/* <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
                </label> */}
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input value={signupForm.email} onChange={(e) => {
                    setSignupForm(prev => ({
                        ...prev, email: e.target.value
                    }))
                }} type="text" className="grow" placeholder="Email" />
                </label>
                {/* <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                  <input type="text" value={signupForm.username} onChange={(e) => {
                      setSignupForm(prev => ({
                          ...prev, username: e.target.value
                      }))
                  }} className="grow" placeholder="Username" />
                </label> */}
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                  <input type="password" value={signupForm.password} onChange={(e) => {
                      setSignupForm(prev => ({
                          ...prev, password: e.target.value
                      }))
                  }} className="grow" placeholder="password" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                  <input type="password" value={signupForm.confirm_password} onChange={(e) => {
                      setSignupForm(prev => ({
                          ...prev, confirm_password: e.target.value
                      }))
                  }} className="grow" placeholder="Confirm password" />
            </label>
            <button onClick={handleSubmit} className='btn btn-active btn-secondary'>Submit</button>
            <p className='text-center mt-4 text-sm text-gray-400'>Already have an Account ? <span role='button' onClick={() => setTogggle(false)} className='btn btn-link'>Log in</span></p>
        </div>)
        :

        (<div className="artboard-horizontal bg-#212121 rounded-lg shadow-lg bg-blue-50 w-[25rem] px-10 py-8 flex flex-col gap-3">
            <h2 className='text-2xl text-black font-semibold text-center'>Log in</h2>
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                      <input value={loginForm.email} onChange={(e) => {
                          setLoginForm(prev => ({
                              ...prev, email: e.target.value
                          }))
                      }} type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                      <input type="password" value={loginForm.password} onChange={(e) => {
                          setLoginForm(prev => ({
                              ...prev, password: e.target.value
                          }))
                      }} className="grow" placeholder="password" />
            </label>
            <button onClick={handleSubmit} className='btn btn-active btn-secondary'>Submit</button>
            <p className='text-center mt-4 text-sm text-gray-400'>Didn't have an Account ? <span role='button' onClick={() => setTogggle(true)} className='btn btn-link'>Sign up</span></p>
        </div>)
        }
    </main>
  )
}

export default Auth