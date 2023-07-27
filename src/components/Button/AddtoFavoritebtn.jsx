import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AiFillHeart } from "react-icons/ai"
import { addFavorite } from '../../store/movies';

function AddtoFavoritebtn(props) {
    const { id } = props
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(addFavorite({id}))} type="button" className='h-14 w-14 rounded-full bg-black flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-[#E65100] hover:text-[#ececec] duration-500'>
                <AiFillHeart className={`text-[#E65100] hover:text-[#ececec]`} size={35}/>
            </button>
        </>
    )
}

export default AddtoFavoritebtn