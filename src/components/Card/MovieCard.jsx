import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function MovieCard({ id, title, releaseDate, genres, voteAverage, voteCount, originalLanguage, overview, alt, posterPath }) {

    const movie = useSelector((state) => state.movies);
    const [genreNames, setGenreNames] = useState([]);

    useEffect(() => {
        for (
            let genre of genres
        ) {
            const foundMovie = movie?.genres.find((movieGenre) => {
                return movieGenre.id === genre
            });
            if (foundMovie) {
                setGenreNames(prev =>  new Set ([...prev, foundMovie.name]))
            }
        }
    });

    return (
        <>
            <div className='bg-gray-600 w-44 md:w-60 sm:w-48 rounded-lg border border-[#ffd1b8] overflow-hidden cursor-pointer hover:scale-105 duration-500'>
                <img src={`posterPath`} alt={alt} className='h-72 w-40 md:w-60 sm:w-48 object-cover' />
                <div className='p-1'>
                    <div className='flex gap-2 truncate'>
                        {
                            Array.from(genreNames)?.map((genreName, index) =>
                                <span key={index} className='text-[#E65100] text-xs uppercase font-semibold tracking-wide'>{genreName}</span>

                            )
                        }
                    </div>
                    <h4 className='mt-1 font-semibold text-lg capitalize leading-tight truncate text-black'>{title}</h4>
                    <div className='mt-1 flex gap-3'>
                        <span className='text-black text-sm'>{releaseDate}</span>
                        <span className='text-black text-sm'>{originalLanguage}</span>
                    </div>
                    <div className='mt-4 flex items-center'>
                        <span className=' text-[#E65100] font-semibold'> {voteAverage}/10 stars </span>
                        <span className='ml-2 text-black text-sm font-semibold'> {voteCount} reviews</span>
                    </div>
                </div >
            </div >
        </>
    )
}

export default MovieCard