import React, { useEffect, useState } from 'react'
import "./style.css"
import SearchInput from '../Input/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { getUpcomingMovie } from '../../store/movies';

function Banner({ title, subTitle, searchPlaceholder, btnText }) {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movies);

    const fetchUpcoming = () => {
        dispatch(getUpcomingMovie());
    }
    
    const [background, setBackground] = useState("");

    useEffect(() => {
        console.log({ fetchUpcoming })
        fetchUpcoming();
        console.log({ fetchUpcoming })
        const bg = movie?.upcoming?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [dispatch])

    return (
        <div className='banner'>
            <div className='wrapper'>
                <div className='bannerContent'>
                    <span className='text-[#E65100] font-semibold text-4xl flex items-center justify-center'>{title}</span>
                    <span className='text-[#E65100] font-semibold text-2xl flex items-center justify-center'>{subTitle}</span>
                    <SearchInput btnText={btnText} searchPlaceholder={searchPlaceholder} />
                </div>
            </div>
        </div>
    )
}

export default Banner