import React from 'react'
import icons from '../utils/icons'

const { BiSearch } = icons

const Search = () => {
  return (
    <form className='flex items-center justify-center'>
      <input
        type='text'
        className='w-[366px] outline-none bg-[#e5e5e5] px-2  rounded-l-[4px] h-7 text-[14px] font-thin text-[#333]'
        placeholder='Search'
      />
      <span className='h-7 pr-[5px] flex items-center bg-[#e5e5e5] rounded-r-[4px] text-[#424242] '>
        <BiSearch size={18} />
      </span>
    </form>
  )
}

export default Search
