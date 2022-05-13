import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineUserAdd, AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

import { motion } from 'framer-motion'

const menuItems = [
  { name: 'store', path: '/' },
  { name: 'faq', path: '/faq' },
  { name: 'help', path: '/help' },
  { name: 'unreal engine', path: '/unreal' },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='w-full flex items-center justify-between bg-zinc-800 pl-6 h-14 overflow-hidden'>
      <div className='flex gap-6 items-center'>
        <div className='uppercase text-md text-white'>G-Store</div>
        <div className='hidden md:flex items-center'>
          {menuItems.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? 'text-xs uppercase text-gray-300 tracking-wider border-b-4 border-blue-500 px-4 py-4'
                    : 'transition-all duration-200 text-xs uppercase text-gray-300 tracking-wider border-b-4 border-transparent hover:border-blue-400 px-4 py-4'
                }
              >
                {item.name}
              </NavLink>
            )
          })}
        </div>
      </div>

      <div className='hidden md:flex gap-4'>
        <Link
          to='/signin'
          className='transition-all duration-200 flex items-center gap-1 uppercase text-[11px] font-semibold text-gray-300 hover:text-gray-200 tracking-wider'
        >
          <AiOutlineUserAdd className='text-lg' />
          <span>sign in</span>
        </Link>
        <button className='transition-all duration-200 bg-blue-500 hover:brightness-90 text-white text-[11px] tracking-wider uppercase font-semibold py-5 px-6'>
          Download
        </button>
      </div>

      {/* Mobile menu toggler ---------------- */}
      <div
        className='md:hidden block relative'
        onClick={() => setIsMenuOpen(true)}
      >
        <AiOutlineMenu className='transition-all duration-200 text-2xl text-gray-100 cursor-pointer py-4 px-4 box-content bg-blue-500 hover:brightness-90' />
      </div>

      {/* Mobile menu rendering --- */}
      {isMenuOpen ? (
        <>
          {/* Overlay --- */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className='fixed bottom-0 left-0 w-full h-[92vh] backdrop-blur-sm bg-black opacity-20 z-10'
          ></div>
          {/* Overlay --- */}

          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
            className='md:hidden fixed top-0 right-0 z-20 h-screen w-[80%] bg-zinc-800'
          >
            <div
              className='absolute top-0 right-0'
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdClose className='transition-all duration-200 text-2xl text-gray-100 cursor-pointer py-4 px-4 box-content bg-gray-600 hover:brightness-90' />
            </div>

            <div className='h-screen w-full'>
              <div className='mt-16 flex flex-col'>
                {menuItems.map((item, index) => {
                  return (
                    <NavLink
                      to={item.path}
                      key={index}
                      className='text-md uppercase py-2 px-4 text-gray-300 hover:text-gray-200 transition-all duration-200 font-semibold tracking-wider border-b border-gray-600 last:border-b-0'
                    >
                      {item.name}
                    </NavLink>
                  )
                })}
              </div>

              <div className='absolute bottom-0 left-0 w-full flex'>
                <Link
                  to='/signin'
                  className='flex-1 transition-all duration-200 flex items-center uppercase text-[11px] font-semibold text-gray-300 hover:text-gray-200 tracking-wider'
                >
                  <div className='mx-auto flex gap-1'>
                    <AiOutlineUserAdd className='text-lg' />
                    <span>sign in</span>
                  </div>
                </Link>

                <button className='flex-1 transition-all duration-200 bg-blue-500 hover:brightness-90 text-white text-[11px] tracking-wider uppercase font-semibold py-5 px-6'>
                  Download
                </button>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </nav>
  )
}
