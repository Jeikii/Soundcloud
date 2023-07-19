import React from 'react'
import logo from '../assets/logo_soundcloud.svg'
import icons from '../utils/icons'
import { Search, Upload } from './'
import { Login } from '../containers/public'

const { BiSearch, HiDotsHorizontal } = icons

const Header = () => {
  return (
    <div className='w-[1240px] flex items-center justify-start'>
      <div className='flex'>
        <div className='w-[69px] flex items-center justify-center bg-black'>
          <a
            href=''
            title='SoundCloud wishes peace and safety for our community in Ukraine'
          >
            <img src={logo} alt='logo' className='w-[48px] h-[46px] ' />
          </a>
        </div>
        <nav className=' flex items-center justify-center'>
          <ul className='w-[104px] h-[46px] flex items-center justify-center bg-[#111] font-sans text-[14px] hover:cursor-pointer border-r border-[#111]'>
            Home
          </ul>
          <ul className='w-[104px] h-[46px] flex items-center justify-center font-sans text-[14px] hover:text-[#fff] hover:cursor-pointer border-r border-[#111] text-[#ccc]'>
            Feed
          </ul>
          <ul className='w-[104px] h-[46px] flex items-center justify-center font-sans text-[14px] hover:text-[#fff] hover:cursor-pointer border-r border-[#111] text-[#ccc]'>
            Library
          </ul>
        </nav>
      </div>
      <div className='w-[409px] h-[46px] flex items-center justify-center hover:cursor-pointer'>
        <Search />
      </div>
      <div className=' h-[46px] flex items-center justify-start hover:cursor-pointer'>
        <span className='w-[99px] h-[46px] flex items-center justify-center text-[#f50] text-[14px] '>
          Try next pro
        </span>
        <span className='w-[86px] h-full flex items-center justify-center text-[14px] text-[#ccc] hover:text-[#fff] hover:cursor-pointer'>
          For Artists
        </span>
        <div className='h-[46px] text-[#ccc] text-[14px] flex  hover:cursor-pointer'>
          <Upload />
        </div>
        <div className='w-[156px] flex'>
          <Login />
        </div>
        <span className='w-[46px] flex items-center justify-center text-[#ccc] hover:text-[#fff]'>
          <HiDotsHorizontal size={30} />
        </span>
      </div>
    </div>
  )
}

export default Header
