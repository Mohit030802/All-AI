import React from 'react'
import Search from './Search'

const Result = () => {
  return (
    <div className='min-h-[100vh]'>
      <div className='flex justify-center items-center'>
        <div className='text-6xl font-bold space-y-4 mt-4'>
          <h1>
            Summarise Article with
          </h1>
          <h1 className='organe_gradient'>

            <span>OPEN AI GPT-3</span>
          </h1>
          <p className='text-base text-gray-500 break-all  '>
            Simplify your reading with Summize, an open-source article summarizer
            that transforms lengthy articles into clear and concise summaries.
          </p>

        </div>

      </div>
      <Search/>

    </div>
  )
}

export default Result
