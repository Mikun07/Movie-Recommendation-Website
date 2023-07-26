import React from 'react'
import { FcSearch } from "react-icons/fc";

function SearchInput(props) {
    const { placeholder, searchHandler, ...restProps } = props;
    return (
        <div className="relative">
            <span className="absolute left-2.5 top-3">
                <FcSearch />
            </span>
            <input
                required
                // onChange={searchHandler}
                type="search"
                className="md:w-full text-black h-10 rounded-lg pl-9 border-2 border-[#E65100] outline-none focus:border-[#E65100] valid:border-[#E65100] invalid:border-gray-600 transition-all duration-500"
                placeholder={placeholder}
                // {...restProps}
            />
        </div>
    )
}

export default SearchInput