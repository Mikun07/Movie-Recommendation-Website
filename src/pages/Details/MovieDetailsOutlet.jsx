import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../store/movies'

function MovieDetailsOutlet() {

  const params = useParams()

  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies);

  const fetchMovieDetails = () => {
    dispatch(getMovieDetails({
      movie_id: params.movieId
    }));
  }

  useEffect(() => {
    fetchMovieDetails(); // eslint-disable-next-line
  }, [dispatch]);




  return (
    <div className='bg-[#ececec] h-full px-4 md:px-10 sm:px-6 py-4 pt-20'>
      <h1 className='text-[#E65100] mt-1 font-semibold capitalize leading-tight text-6xl flex justify-center'>{movie.detail?.original_title}</h1>

      <div className=' flex flex-col md:grid md:grid-cols-2 md:gap-20 mt-6'>
        <div className=' relative bg-gray-600 rounded-lg border-4 border-[#E65100] overflow-hidden cursor-pointer z-0'>
          {/* image  */}
          <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.detail?.poster_path}`} alt='poster img' className='h-full w-full object-cover' /> 
        </div>
        <div className='flex px-3 md:px-0 flex-col md:gap-9 gap-1 text-justify w-full mt-8'>
          {/* info */}
          <div className='flex gap-2'>
            {
              movie.detail?.genres?.map((genre, index) =>
                <span key={index} className=' text-[#E65100] capitalize font-semibold tracking-wide md:text-2xl text-sm'>{genre?.name}</span>
              )
            }
          </div>

          <span className='text-black uppercase font-semibold tracking-wide md:text-4xl text-lg'>{movie.detail?.tagline}</span>

          <div className='flex flex-col md:gap-6 gap-3 '>
            <div className=' flex items-center gap-2 text-justify'>
              <span className=' text-[#E65100] font-semibold'> {movie.detail?.vote_average}/10 </span>
              <span className=' text-black font-semibold'> of </span>
              <span className=' text-black text-sm font-semibold '> {movie.detail?.vote_count} reviews</span>
            </div>
            <p className='font-semibold capitalize text-black text-justify leading-normal md:text-xl'>
              Release date: {movie.detail?.release_date}
            </p>

            <p className='font-semibold capitalize text-black text-justify leading-normal md:text-xl'>
              duration: {movie.detail?.runtime} minutes
            </p>

          </div>

          <p className='font-semibold text-black text-justify mt-4 md:mt-0 leading-normal md:text-2xl'>
            {movie.detail?.overview}
          </p>

          <div className='flex flex-col gap-4 mt-6'>
            <span className='font-semibold tracking-wide md:text-2xl text-sm capitalize text-black '>Producted by:</span>
            <div className=''>
              {/* {
                movie.detail?.production_companies?.map((product, index) =>
                <img key={index}  src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${product?.logo_path}`} alt=""  className='w-12 h-12 rounded-full object-cover'/>
                  
                )
              } */}
              {
                movie.detail?.production_companies?.map((product, index) =>
                  <span key={index} className=' text-[#E65100] justify-center capitalize font-semibold tracking-wide text-xs'>{product?.name}</span>
                )
              }
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default MovieDetailsOutlet