import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <ul className="menu menu-horizontal px-1">
                <Link to="/"><li><a>Home</a></li></Link>
                    <Link to="/AddMovie"><li><a>Add Movie</a></li></Link>
                </ul>
                <Link to="/login">
                    <button className='text-white bg-red-600 p-2 rounded-lg w-20 '>Login</button>
                </Link>
                <div className="flex-none">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>


                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar