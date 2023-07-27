import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getFavorite } from '../../store/movies';

function MyListOutlet() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies);

  const fetchFavorites = () => {
    dispatch(getFavorite());
  }

  useEffect (() => {
    fetchFavorites();
    console.log({movie});
  }, [dispatch]);

  return (
    <div className='bg-[#ececec] h-full px-4 md:px-10 sm:px-6 py-4 pt-28'>
      <h1 className='text-[#E65100] font-semibold text-6xl flex justify-center'> My List</h1>
    </div>
  )
}

export default MyListOutlet