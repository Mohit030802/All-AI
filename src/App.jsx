import { Routes, Route } from 'react-router-dom'

import Chatgpt from './components/Chatgpt'


import Result from './components/Result'
import CodingGpt from './components/CodingGpt'
import Imagegpt from './components/Imagegpt'
import Main from './components/Main'

function App() {


  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/questionGpt" element={<Chatgpt />} />
          <Route path="/summaryAI" element={<Result />} />
          <Route path="/codingGpt" element={<CodingGpt />} />
          <Route path="/imageGpt" element={<Imagegpt />} />
        </Routes>
      </div>
    </>
  )
}

export default App
