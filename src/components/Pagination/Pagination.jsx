import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { getMovies } from '../../store/movies';

function Pagination() {

    const movie = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    let [num, setNum] = useState(1);
    let [current, setCurrent] = useState(movie.movieList.page);

    const pages = [
        { page: num },
        { page: num + 1 },
        { page: num + 2 },
        { page: num + 3 },
    ]

    const next = () => {
        setNum(++num)
    }

    const prev = () => {
        num > 1 && setNum(--num)
    }

    const goToPage = (currentPage) => {
        setCurrent(currentPage);
        dispatch(getMovies({page:currentPage}))
    }

    return (
        <div className=' flex bg-black rounded-lg font-bold'>
            <button onClick={prev} className='h-12 cursor-pointer text-[#ececec] px-4 rounded-l-lg border-2 border-r-0 border-[#E65100] hover:bg-[#E65100] hover:text-[#ececec]'>
                <BsChevronCompactLeft />
            </button>
            {pages.map((pg, i) => (
                <button key={i} onClick={() => goToPage(pg.page)} className={`h-12 w-12 cursor-pointer text-[#ececec] border-2 border-r-0 border-[#E65100] ${current === pg.page && 'bg-[#E65100] text-[#ececec]'}`}>
                    {pg.page}
                </button>
            ))}
            <button onClick={next} className='h-12 cursor-pointer text-[#ececec] px-4 rounded-r-lg border-2 border-[#E65100] hover:bg-[#E65100] hover:text-[#ececec]'>
                <BsChevronCompactRight />
            </button>
        </div>
    )
}

export default Pagination