import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from '../../store/movies';

function SearchInput(props) {

    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movies);

    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { searchPlaceholder, btnText } = props;

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    const findMovies = () => {
        dispatch(searchMovies());
    }

    useEffect(() => {
        findMovies();
    }, [dispatch])

    return (
        <div className='flex items-center gap-1'>
            <input
                type="search"
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                placeholder={searchPlaceholder}
                className='w-full font-semibold bg-black text-[#E65100] h-10 rounded-lg px-6 border-2 border-[#E65100] outline-none' />
            <button className='bg-black text-[#E65100] font-semibold h-10 rounded-lg px-8 border-2 border-[#E65100] outline-none'>
                {btnText}
            </button>
        </div>
    )
}

export default SearchInput