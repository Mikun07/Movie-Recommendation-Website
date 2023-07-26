import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { FcSearch } from "react-icons/fc";

function SelectInput(props) {

  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false)
  const { options, optionLabel } = props;

  return (
    <div className='w-72 font-medium h-12 z-30 relative'>
      <div
        onClick={() => setOpen(!open) }
        className={`bg-black w-full h-full text-[#ececec] flex items-center justify-between p-2 rounded-lg border-2 border-[#E65100] outline-none ${!selected && "text-[#ececec]"}`}>
        <span className='font-semibold text-lg capitalize leading-tight truncate'>
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Select Genre"}
        </span>
        <BiChevronDown size={25} className={`${open && "rotate-180"}`}/>
      </div>

      <ul className={`bg-black mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"}`}>
        <div className='flex items-center px-2 sticky top-0 bg-black'>
          <FcSearch size={18} />
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder='Enter genre name'
            className="text-[#ececec] placeholder:text-[#ececec] py-3 px-2 outline-none w-full bg-black"
            name=""
            id=""
          />
        </div>
        {
          options?.map((option, index) =>
            <li
              key={index}
              className={`py-3 px-2 text-sm hover:bg-[#E65100] text-[#ececec] 
              ${option?.optionLabel?.toLowerCase() === selected?.toLowerCase() && 'bg-[#E65100] text-[#ececec]'}
              ${option?.optionLabel?.toLowerCase().stateWith(inputValue)
                  ? "block"
                  : "hidden"
                }`}
              onClick={() => {
                if (option?.optionLabel?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(option?.optionLabel);
                  setOpen(false);
                  setInputValue("");
                }
              }}
            >
              {option[optionLabel]}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default SelectInput