import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-around items-center bg-slate-100 shadow-lg  p-4'>
        <p className='text-2xl uppercase text-pink-500 font-bold tracking-[4px]'>Blog</p>
        <ul className='flex items-center'>
        <Link className='px-8 text'  to='/'>Home</Link>
        <Link className='bg-pink-500 hover:bg-pink-600 text hover:text-white p-2 rounded-lg' to='/create'>New Blog</Link>
        </ul>
    </nav>
  )
}

export default Nav