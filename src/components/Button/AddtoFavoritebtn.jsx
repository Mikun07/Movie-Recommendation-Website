import React from 'react'
import { AiFillHeart } from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddtoFavoritebtn(props) {
    const notify = () => toast("Movie as been add to favorite");

    return (
        <>
            <div>
                <button onClick={notify} type="button" className='h-14 md:h-10 w-14 md:w-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-[#E65100] hover:text-[#ececec] duration-500'>
                    <AiFillHeart className={`text-[#E65100] hover:text-[#ececec] md:text-xl text-4xl`} />
                </button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark" 
                    className="z-50 mt-16" />
            </div>
        </>
    )
}

export default AddtoFavoritebtn