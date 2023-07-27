import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { MultiSelect } from 'react-multi-select-component';
import { getMovies, updateSelectedGenres } from "../../store/movies"

function SelectInput(props) {
  const {
    options,
    optionLabel,
  } = props;
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies);
  const [mappedOptions, setMappedOptions] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setMappedOptions([...options.map(option => ({ label: option[optionLabel], value: option.id }))])
  })

  const handleSelected = (e) => {
    setSelected(e)
    dispatch(updateSelectedGenres(e))
    dispatch(getMovies())
  }

  return (
    <>
      <div className=" w-80 relative">
        <MultiSelect
          name="select"
          value={selected}
          onChange={handleSelected}
          options={mappedOptions}
          className='border-2 border-red-600 rounded bg-black placeholder:text-[#E65100]'
        />
      </div>
    </>

  )
}

export default SelectInput