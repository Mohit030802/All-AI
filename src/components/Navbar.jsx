import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img2.png'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const location=useLocation()
  const getpathName=()=>{
    switch (location.pathname){
      case '/':
        return 'All AI'
      case '/questionGpt':
        return 'Question GPT'
      case '/summaryAI':
        return 'Summary AI'
      case '/codingGpt':
        return 'Coding GPT'
      
    }

  }
  return (
    <div> 
      <div className='text-[#ffff] backdrop-filter backdrop-blur-lg bg-opacity-95 bg-no-hero border-none flex justify-center items-center text-center text-xl font-serif'>
        <div className='flex justify-start mr-48 items-center text-center mt-2 mb-2'>

        <img src={img} height="48" width="48" alt="" />
        <h2 className='font-bold'>{getpathName()}</h2>
        </div>
        <div >
          <ul className='flex justify-center items-center text-center list-none ml-5 space-x-8  text-gray-500'>
            <li className='hover:underline hover:underline-offset-4 hover:cursor-pointer hover:text-white'>
              <Link to={'/'}>
              Home
              </Link>
            </li>
            <li className='hover:underline hover:underline-offset-4 hover:cursor-pointer hover:text-white'>
              About
            </li>
            <li className='hover:underline hover:underline-offset-4 hover:cursor-pointer hover:text-white'>
              Portfolio
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
