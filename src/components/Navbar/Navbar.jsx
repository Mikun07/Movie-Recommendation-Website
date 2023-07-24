import React, { useState } from 'react';
import SearchInput from '../Input/SearchInput';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-16 text-white fixed px-4 bg-gray-900'>
      <div>
        logo
      </div>

      <div className='hidden md:flex'>
        <SearchInput />
      </div>

      <div>
        <ul className='hidden md:flex'>
          <Link className='px-4 cursor-pointer capitalize font-medium text-2xl text-white hover:scale-105 duration-200'>Home</Link>
          <Link className='px-4 cursor-pointer capitalize font-medium text-2xl text-white hover:scale-105 duration-200'>Browse Movies</Link>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer pr-4 z-10 text-white md:hidden'>
           {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {
          nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900">
              <Link onClick={() => setNav(!nav)} className='px-4 py-6 cursor-pointer capitalize font-medium text-4xl text-white'>Home</Link>
              <Link onClick={() => setNav(!nav)} className='px-4 py-6 cursor-pointer capitalize font-medium text-4xl text-white'>Browse Movies</Link>
            </ul>
          )}
      </div>
    </div>
  )
}

export default Navbar