import React from 'react'
import ava from '../../assets/me.jpg'
import icons from '../../utils/icons'

const { BiChevronDown, HiBell, IoIosMail } = icons

const Login = () => {
  return (
    <div className='w-[156px] flex items-center justify-center'>
      <span className='h-[46px] flex items-center justify-center'>
        <img src={ava} alt='avatar' className='w-[26px] h-[26px] rounded-full mx-[6px]' />
        <span className='text-[#ccc] hover:text-[#fff]'>
          <BiChevronDown />
        </span>
      </span>
      <span className='w-[46px] h-[46px] flex items-center justify-center text-[#ccc] hover:text-[#fff]'>
        <HiBell size={21} />
      </span>
      <span className='w-[46px] h-[46px] flex items-center justify-center text-[#ccc] hover:text-[#fff]'>
        <IoIosMail size={22} />
      </span>
    </div>
  )
}

export default Login
