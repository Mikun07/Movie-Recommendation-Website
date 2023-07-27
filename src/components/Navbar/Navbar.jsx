import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdSlowMotionVideo } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "All Movies",
      link: "/allmovies"
    }
  ]

  return (
    <div className='shadow-sm shadow-[#E65100] w-full top-0 left-0 fixed z-30'>
      <div className='md:flex justify-between items-center text-[#ececec] bg-black py-4 sm:px-6 md:px-10 px-4'>
        <div onClick={() => navigate('/')} className='cursor-pointer text-2xl font-bold flex items-center text-center md:text-4xl capitalize'>
          <MdSlowMotionVideo className='text-4xl ' />
          Mikun Films
        </div>

        <div onClick={() => setOpen(!open)}>
          {open ? <FaTimes className='text-3xl absolute right-4 top-5 cursor-pointer md:hidden' /> : <FaBars className='text-3xl absolute right-4 top-5 cursor-pointer md:hidden' />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
          {
            links.map((links) => (
              <li key={links.name} className={`md:ml-8 md:my-0 my-7 active:text-[#E65100] active:font-bold hover:scale-105 hover:text-[#E65100] duration-200`}>
                <Link  to={links.link} className=' px-4 cursor-pointer capitalize font-medium text-2xl'>{links.name}</Link>
              </li>

            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar