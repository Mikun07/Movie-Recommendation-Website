import React, { useState } from 'react'
import Banner from '../../components/Banner/Banner'
// import BG from '../../assets/bg.jpg'

function HomeOutlet() {
  return (
    <>
      <Banner searchPlaceholder='Seacrh for a movie....' btnText='Search' title="Welcome movie lover." subTitle="Millions of movies, Tv shows and people to discover. Explore now" />
    </>
  )
}

export default HomeOutlet

{/* <div className='bg-[#ececec] h-screen px-4 md:px-10 sm:px-6 py-4 pt-28'> */ }
//   <div className='max-w-screen-lg gap-6 p-4 mx-auto flex flex-col w-full items-center justify-center h-full px-4 md:flex-row'>
//     <h1 className='text-[#E65100] font-semibold text-8xl flex items-center justify-center'>Are you a big fan of movies then you are in the right place</h1>
//     <h2 className='text-[#E65100] font-semibold text-4xl flex justify-center'></h2>
//   </div>
// </div>