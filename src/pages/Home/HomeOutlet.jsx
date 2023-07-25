import React, { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

function HomeOutlet() {
  const slides = [
    {
      url: "https://pixabay.com/photos/japanese-beetle-beetle-insect-8137606/"
    },
    {
      url: "https://pixabay.com/photos/japanese-beetle-beetle-insect-8137606/"
    },
    {
      url: "https://pixabay.com/photos/deer-doe-buck-reindeer-animals-8052359/"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevslide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <>
    </>
    // <div className='max-w-[1400px] h-screen w-full m-auto relative group'>
    //   <div
    //     style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    //     className='w-Screen h-full bg-fixed bg-no-repeat bg-cover duration-500'
    //   >
    //     <div className='flex justify-center py-2'>
    //       {slides.map((slides, slideIndex) => (
    //         <div
    //           key={slideIndex}
    //           onClick={() => goToSlide(slideIndex)}
    //           className='text-2xl cursor-pointer'
    //         >
    //           <RxDotFilled />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] p-1 left-1 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
    //     <BsChevronCompactLeft onClick={prevslide} size={70} />
    //   </div>
    //   <div className='hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] p-1 right-1 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
    //     <BsChevronCompactRight onClick={nextSlide} size={70} />
    //   </div>

    // </div>
  )
}

export default HomeOutlet 