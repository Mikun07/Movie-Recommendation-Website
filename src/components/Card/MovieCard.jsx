import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddtoFavoritebtn from '../Button/AddtoFavoritebtn';


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
                setGenreNames(prev => new Set([...prev, foundMovie.name]))
            }
        }
    }, [id]);

    return (
        <>
            <div className=' relative bg-gray-600 rounded-lg border border-[#ffd1b8] overflow-hidden cursor-pointer z-0'>
                <div>
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${posterPath}`} alt={alt} className='h-72 md:h-full w-40 md:w-full sm:w-48 object-cover' />
                    <div className='absolute top-56 right-5'>
                        <AddtoFavoritebtn id={id} />
                    </div>
                </div>

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
                </div>
            </div>


        </>
    )
}

export default MovieCard