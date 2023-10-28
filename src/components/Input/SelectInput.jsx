import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { MultiSelect } from 'react-multi-select-component';
import { getMovies, updateSelectedGenres } from "../../store/movies"

function SelectInput(props) {
  const {
    options,
  } = props;
  const dispatch = useDispatch();
  // const movie = useSelector((state) => state.movies);
  const [selected, setSelected] = useState([]);


  const handleSelected = () => {
    dispatch(updateSelectedGenres(selected))
    dispatch(getMovies({ page: 1 }))
  }

  const handleReset = () => {
    dispatch(updateSelectedGenres([]))
    dispatch(getMovies({ page: 1 }))
  }

  return (
    <>
      <div className='flex flex-col items-center gap-4'>
        <div className="w-80 relative">
          <MultiSelect
            name="select"
            value={selected}
            onChange={setSelected}
            options={options}
            className='border-2 border-[#E65100] rounded bg-black placeholder:text-[#E65100]'
          />
        </div>
        <div className='flex gap-4'>
          <button onClick={handleSelected} className=' cursor-pointer hover:scale-105 hover:bg-[#E65100] text-[#ececec] bg-black border-2 border-[#E65100] rounded-lg px-4 py-2 capitalize font-semibold' >
            Apply
          </button>
          <button onClick={handleReset} className=' cursor-pointer hover:scale-105 hover:bg-[#E65100] text-[#ececec] bg-black border-2 border-[#E65100] rounded-lg px-4 py-2 capitalize font-semibold'>
            Reset
          </button>
        </div>
      </div>
    </>

  )
}

export default SelectInput 