import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HomeOutlet() {
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-[#ececec] h-screen px-4 md:px-10 sm:px-6 py-4 pt-28' >
        <div className='max-w-screen-lg gap-6 p-4 mx-auto flex flex-col w-full items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col gap-10'>
            <div className=' flex flex-col'>
              <h2 className='text-[#E65100] font-semibold text-6xl flex justify-center'>Wel<span className='text-black font-semibold text-6xl flex justify-center'>come</span></h2>
              <h1 className='text-[#E65100] font-semibold normal-case italic text-2xl flex text-justify'>
                Are you a big fan of movies... then you are in the right place
              </h1>
            </div>

            <div className='flex items-center justify-center'>
              <button onClick={() => navigate('/allmovies')} type="button" className='bg-black cursor-pointer text-[#ececec] hover:scale-105 hover:bg-[#E65100] hover:text-[#ececec] duration-500 rounded-lg px-8 py-4'>
                Browse Movies
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default HomeOutlet

