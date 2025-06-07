import React from 'react'
// import { BrowserRouter , Routes , Route , link } from 'react-router-dom'
import { Link } from 'react-router-dom'
const home = () => {
  return (
    <div  className='h-screen w-screen'>
      <div className='mx-[20px] bg-blue'>
        <Link to='/dashboard'>dashboard</Link>
      </div>
    </div>
  )
}

export default home
