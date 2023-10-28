import React, { useEffect } from 'react'
import SelectInput from '../../components/Input/SelectInput'
import Pagination from '../../components/Pagination/Pagination.jsx'
import MovieCard from '../../components/Card/MovieCard'
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../store/movies';
import { getMovieGenres } from '../../store/movies'

function AllMoviesOutlet() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies);

  const fetchMovies = () => {
    dispatch(getMovies({ page: 1 }));
  }

  const fetchMovieGenres = () => {
    dispatch(getMovieGenres());
  }

  useEffect(() => {
    fetchMovies(); // eslint-disable-next-line
    fetchMovieGenres(); // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      {
        movie.loading ?
          <p>Loading......</p>
          :
          <div className='bg-[#ececec] h-full px-4 md:px-10 sm:px-6 py-4 pt-28'>
            <div className='mt-5 flex justify-center'>
              <SelectInput options={movie.genres?.map(genre => ({
                label:genre.name, value: genre.id
              }))} />
            </div>

            <div className='mt-10 justify-center px-0 grid gap-4 sm:gap-3 md:gap-4 grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-rows-5 sm:grid-rows-3 md:grid-rows-3'>
              {
                movie?.movieList?.results?.map((movie, index) =>
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    voteAverage={movie.vote_average}
                    voteCount={movie.vote_count}
                    originalLanguage={movie.original_language}
                    overview={movie.overview}
                    alt={movie.original_title}
                    genres={movie.genre_ids}
                    posterPath={movie.poster_path} />
                )
              }
            </div>
            <div className='flex py-12 justify-center'>
              <Pagination />
            </div>
          </div>
      }
    </>
  )
}

export default AllMoviesOutlet