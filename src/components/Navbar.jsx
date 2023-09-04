import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img2.png'
const Navbar = () => {
  return (
    <div>
      <div className='flex  justify-between p-4 border-b-2 shadow-md shadow-[#274046]'>
        <div className='flex ml-4 justify-center items-center text-center space-x-4'>
          <img src={img} alt="" />
          <h1 className='text-2xl font-bold tracking-widest text-[#1a2a2e]'>Summary AI</h1>
        </div>
        <Link to={'https://github.com/Mohit030802/SummaryAI'} target='_blank'>
          <div className='flex justify-center items-center text-center bg-black text-white p-2 rounded-lg mr-4'>
            <button>GitHub</button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
