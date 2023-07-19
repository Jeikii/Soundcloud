import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar, Header } from '../../components'

const Discover = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-[#F2F2F2] overflow-y-auto'>
      <div className='flex w-full bg-[#333333] text-[#ffff] items-center justify-center h-[46px]'>
        <Header />
      </div>
      <div className='w-[1240px] bg-[#ffffff] flex '>
        <div className='w-[820px] flex-none border border-blue-700  m-[30px]'>
          <Outlet />
        </div>
        <div className='w-[300px] flex-none border border-purple-700  m-[30px]'>
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default Discover
