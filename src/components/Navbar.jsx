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
      <div className='flex  justify-between p-4 border-b-2 shadow-md shadow-[#274046]'>
        <div className='flex ml-4 justify-center items-center '>
          <Link to={'/'}> 
          <img src={img} width="48" height="48"  alt="" />
          <h1 className='text-2xl font-bold tracking-widest text-[#1a2a2e]'>{getpathName()}</h1>
        
          </Link>
        </div>
        <div className='flex space-x-2'>

          <Link to={'/questionGpt'}>
            <div className='flex justify-center items-center text-center bg-black text-white p-2 rounded-lg mr-4'>
              <button>Question gpt</button>
            </div>
          </Link>
          <Link to={'/summaryAI'}>
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
