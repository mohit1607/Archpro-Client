import { BsFillPersonFill } from "react-icons/bs"; 
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import { useNavigate } from 'react-router-dom'
import Modal from "./Modal";
import toast from "react-hot-toast";

const Navbar = () => {

    const {auth, user} = useContext(FirebaseContext)

    const navigate = useNavigate()

    const logOut = () => {
        
        if(user === null) {
            // alert('already logged out')
            toast('user not logged in yet')
            return
        }
        
        try{
            signOut(auth).then(() => {
                console.log("Signed out successfully")
                // alert('User Logged out')
                toast.success('User Logged out')
                navigate('/')
            }).catch((error) => {
                console.error(error);
                // alert('An unknown error occured')
                toast.error('an unknown error occured')
            });
        }catch(e) {
            console.error(e);
            // alert('something went wrong')
            toast.error('something went wrong')
        }
    }

    const handleProfileClick = () => {
        if(!user) {
            document.getElementById('my_modal_1').showModal()
        }
        else {
            navigate('/profile')
            // toast.success('navigated to the profile')
        }
    }


    return (
        <div className="navbar bg-blue-50 rounded-none fixed top-0 left-0 z-[50] px-[5%]">
            <div className="flex-1">
                <a onClick={() => navigate('/')} className="btn btn-ghost text-xl">Arch Pro</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center">
                    {/* <li>
                    <details>
                    <summary></summary>
                    <ul className="rounded-t-none p-2 bg-white z-[11]">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li> */}
                    <li><a href='/portal' >Explore</a></li>
                    <li><a href='/social' >Connect</a></li>
                    {!user && <li><a className="border px-2 py-1 border-black hover:bg-green-600 hover:text-white" href='/auth' >SignUp</a></li>}
                </ul>
            </div>
            {user && <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="flex justify-center items-center border-2 rounded-full p-2 border-black">
                            <BsFillPersonFill size={20}/>
                        </div>
                        {/* <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div> */}
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white">
                        <li>
                            <a className="justify-between" onClick={handleProfileClick}>
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={logOut}>Logout</a></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default Navbar