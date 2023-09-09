import { Routes, Route } from 'react-router-dom'

import Chatgpt from './components/chatgpt'
import Navbar from './components/Navbar'

import Result from './components/Result'

function App() {


  return (
    <>
      <div className='bg-gradient-to-b from-[#f6d5f7]  to-[#fbe9d7]'>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Chatgpt />} />
          <Route path="/chatgpt" element={<Chatgpt />} />
          <Route path="/summaryAI" element={<Result />} />
        </Routes>
      </div>
    </>
  )
}

export default App
