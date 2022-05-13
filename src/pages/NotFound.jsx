import React from 'react'
import { Navbar } from '../components/Navbar'

export const NotFound = () => {
  return (
    <div className='w-full'>
      <Navbar />

      <div className='w-full h-[90vh] flex justify-center items-center'>
        <div className='relative inline-block font-light text-5xl text-gray-400'>
          <span className='relative'>404 | Page Not Found</span>
        </div>
      </div>
    </div>
  )
}
