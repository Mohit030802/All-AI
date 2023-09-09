import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img2.png'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const location=useLocation()
  const getpathName=()=>{
    switch (location.pathname){
      case '/chatgpt':
        return 'Chat GPT'
      case '/summaryAi':
        return 'Summary AI'
      
    }

  }
  return (
    <div>
      <div className='flex  justify-between p-4 border-b-2 shadow-md shadow-[#274046]'>
        <div className='flex ml-4 justify-center items-center text-center space-x-4'>
          <img src={img} alt="" />
          <h1 className='text-2xl font-bold tracking-widest text-[#1a2a2e]'>{getpathName()}</h1>
        </div>
        <div className='flex space-x-2'>

          <Link to={'/chatgpt'}>
            <div className='flex justify-center items-center text-center bg-black text-white p-2 rounded-lg mr-4'>
              <button>Chat gpt</button>
            </div>
          </Link>
          <Link to={'/summaryAi'}>
            <div className='flex justify-center items-center text-center bg-black text-white p-2 rounded-lg mr-4'>
              <button>Summary AI</button>
            </div>
          </Link>
          <Link to={'https://github.com/Mohit030802/SummaryAI'} target='_blank'>
            <div className='flex justify-center items-center text-center bg-black text-white p-2 rounded-lg mr-4'>
              <button>GitHub</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
