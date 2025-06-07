import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
  <div className='w-screen h-screen bg-[#343634]'>

      <div className=' bg-[#221f1f]'> 
        <nav className='p-4 flex flex-row justify-between mx-20 bg-lba'>
          <h1 className='font-bold text-white'>my 
            <span className='font-bold text-[yellow]'> ramen shop</span>
          </h1>
          <ul className='flex gap-5 text-[yellow] font-bold' >
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/about">About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/contact">Contact</Link>
            </li>

          </ul>
        </nav>
        </div>
</div>
  )
}

export default Contact
