import React from "react";
import { BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    // mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex items-center justify-between">
        {/* logo section */}
        <Link to='/' className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">nextPage</span>
        </Link>
        {/* nav items section */}
        <div>
            <ul className="hidden lg:flex items-center space-x-8">
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')} >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/books' className=''>Books</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={ ({ isActive })=> (isActive ? 'active' : 'default')}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className=''>About Us</NavLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
