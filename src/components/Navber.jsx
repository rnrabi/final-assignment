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
                            <li><NavLink to='/' className={({isActive})=>isActive ? 'font-bold underline' : ''}>Home</NavLink></li>
                            <li><NavLink to='/shop' className={({isActive})=>isActive ? 'font-bold underline' : ''}>Shop</NavLink></li>
                            <li><NavLink to='/myCart' className={({isActive})=>isActive ? 'font-bold underline' : ''}>cart icon</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">
                        {/* <img className="w-[160px] h-[160px]" src="" alt="" /> */}
                        MediGlam</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><NavLink to='/' className={({isActive})=>isActive ? 'font-bold underline' : ''}>Home</NavLink></li>
                        <li><NavLink to='/shop' className={({isActive})=>isActive ? 'font-bold underline' : ''}>Shop</NavLink></li>
                        <li><NavLink to='/myCart' className={({isActive})=>isActive ? 'font-bold underline' : ''}>cart icon</NavLink></li>

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
                </div>
            </div>
        </div>
    );
};

export default Navber;