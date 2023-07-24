import React from 'react'
import { FcSearch } from "react-icons/fc";

function SearchInput(props) {
    const { searchHandler, ...restProps } = props;
    return (
        <div className="relative">
            <span className="absolute left-2.5 top-3">
                <FcSearch />
            </span>
            <input
                required
                onChange={searchHandler}
                type="search"
                className="w-full text-black h-10 rounded-lg pl-9 outline-none bg-gray-50 border border-gray-200 focus:border-primary-600 valid:border-primary-600 invalid:border-gray-200 transition-all duration-500"
                placeholder="Quick Search"
                {...restProps}
            />
        </div>
    )
}

export default SearchInput