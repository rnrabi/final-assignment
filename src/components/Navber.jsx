import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo.jpg"


const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Home</NavLink></li>
                            <li><NavLink to='/shop' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Shop</NavLink></li>
                            <li><NavLink to='/myCart' className={({ isActive }) => isActive ? 'font-bold underline' : ''}><FaCartPlus /></NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">
                        {/* <img className="w-[160px] h-[160px]" src="" alt="" /> */}
                        MediGlam</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Home</NavLink></li>

                        <li><NavLink to='/shop' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Shop</NavLink></li>

                        <li><NavLink to='/myCart' className={({ isActive }) => isActive ? 'font-bold underline' : ''}><FaCartPlus /></NavLink></li>

                        <li><NavLink to='/register' className={({ isActive }) => isActive ? 'font-bold underline' : ''}>Sign Up</NavLink></li>

                        <li>
                            <details>
                                <summary>Language</summary>
                                <ul className="p-2">
                                    <li><a>English</a></li>
                                    <li><a>বাংলা</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn">Join Us</Link>

                    <div className="">
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li> <a>Update Profile</a></li>
                                    <li><a>Dashboard</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;