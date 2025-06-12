import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const links = <>
       <li><NavLink to="/" className='hover:bg-teal-700'>Home</NavLink></li>
      <li><NavLink to="/all-packages" className='hover:bg-teal-700' >All Packages</NavLink></li>
      <li><NavLink to="/about" className='hover:bg-teal-700'>About</NavLink></li>
      
      {user && (
        <>
          <li><NavLink to="/all-package" className='hover:bg-teal-700'>All Packages</NavLink></li>
          
          <li><NavLink to="/my-bookings" className='hover:bg-teal-700' >My Bookings</NavLink></li>
        </>
      )}
      <li><NavLink to="/about" className='hover:bg-teal-700'>About</NavLink></li>
  </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl "><span className='text-teal-700'>Atlas</span>Way</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
    </ul>
  </div>
  <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 items-center'>
          
         {links}

          {user ? (
           <>
  {user && (
    <div className='flex justify-around items-center gap-2'>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              src={user.photoURL}
              referrerPolicy='no-referrer'
              alt='avatar'
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link className='hover:bg-teal-700' to="/add-package">Add Package</Link>
          </li>
          <li>
            <Link className='hover:bg-teal-700' to="/my-packages">Manage My Packages</Link>
          </li>
          <li>
            <button className='hover:bg-teal-700' onClick={logOut}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  )}
</>

          ) : (
            <>
              <li>
                <Link className='hover:bg-teal-700 ' to='/login'>Login</Link>
              </li>
              <li>
                <Link className='hover:bg-teal-700' to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;