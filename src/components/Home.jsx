import React from 'react'
import Navbar from './Navbar'
import Result from './Result'
import './App.css'
const Home = () => {
  return (
    <>




      <div className='bg-gradient-to-b from-[#f6d5f7]  to-[#fbe9d7]'>
        <div>
          <Navbar />
        </div>
        <div className='main'>

          <Result />
        </div>

      </div>


    </>
  )
}

export default Home
