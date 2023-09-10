import { Routes, Route } from 'react-router-dom'

import Chatgpt from './components/chatgpt'
import Navbar from './components/Navbar'

import Result from './components/Result'
import Home from './components/Home'
import CodingGpt from './components/CodingGpt'

function App() {


  return (
    <>
      <div className='bg-gradient-to-b from-[#f6d5f7]  to-[#fbe9d7]'>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionGpt" element={<Chatgpt />} />
          <Route path="/summaryAI" element={<Result />} />
          <Route path="/codingGpt" element={<CodingGpt />} />
        </Routes>
      </div>
    </>
  )
}

export default App
