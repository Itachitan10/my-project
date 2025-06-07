import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-screen min-h-screen bg-[#343634]'>

      <div className='bg-[#221f1f]'>
        <nav className='p-4 flex flex-col md:flex-row justify-between md:items-center mx-4 md:mx-20'>
          <h1 className='font-bold text-white text-2xl mb-2 md:mb-0'>
            my <span className='text-[yellow]'>ramen shop</span>
          </h1>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-[yellow] focus:outline-none'
            aria-label="Toggle menu"
          >
            {/* Simple hamburger lines */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu */}
          <ul
            className={`flex flex-col md:flex-row gap-2 md:gap-5 text-[yellow] font-bold
              ${isOpen ? 'block' : 'hidden'} md:flex`}
          >
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* The rest of your page content here */}
      <div className='p-6 mx-4 md:mx-10'>

        <p className="text-3xl md:text-5xl text-center text-[yellow] font-serif">
          Welcome to Ichiraku Ramen!
        </p>

        <div className='flex flex-col lg:flex-row mt-10 justify-center max-w-6xl mx-auto gap-6'>

          <div className='flex justify-center lg:justify-end'>
            <img 
              src="https://i.pinimg.com/originals/6a/07/c6/6a07c617ea6f97269f2702de181d254d.jpg" 
              alt="Ichiraku Ramen" 
              className='w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg'
            />
          </div>

          <div className='bg-amber-100 p-6 rounded-2xl shadow-xl'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4'>Welcome to Ichiraku Ramen!</h2>
            <p className='text-sm md:text-base leading-relaxed'>
              The legendary ramen shop loved by ninjas and villagers alike. Inspired by the famous ramen house from the Hidden Leaf Village, we serve heartwarming bowls of rich broth, perfectly cooked noodles, and authentic Japanese flavors. <br /><br />
              Whether you're craving a classic Miso Ramen, a spicy Tantanmen, or our special Naruto Ramen topped with narutomaki (fish cake swirls) — there's a bowl waiting for every ramen lover here! <br /><br />
              <strong>Come hungry, leave happy.</strong> Experience the taste that kept Naruto Uzumaki coming back for more!
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About
