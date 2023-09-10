import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='min-h-[100vh]'>
            <div className='flex flex-wrap space-x-6 m-4 p-2 '>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 ">
                   
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Question GPT</h5>
                    
                    <p className="mb-3 font-normal text-gray-700 "> GPT-3 API: Smart tool for text, chatbots, translations, and more.</p>
                    <Link to={'/questionGpt'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg ">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200  rounded-lg backdrop-blur-lg bg-opacity-50 shadow-md ">
                   
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Summary GPT</h5>
                  
                    <p className="mb-3 font-normal text-gray-700 ">Simplify your reading with Summize, an open-source article summarizer
                        that transforms lengthy articles into clear and concise summaries.</p>
                    <Link to={'/summaryAI'}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg ">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200  rounded-lg backdrop-blur-lg bg-opacity-50 shadow-md ">
                   
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Coding GPT</h5>
                  
                    <p className="mb-3 font-normal text-gray-700 ">Simplify your reading with Summize, an open-source article summarizer
                        that transforms lengthy articles into clear and concise summaries.</p>
                    <Link to={'/codingGpt'}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg ">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default Home
