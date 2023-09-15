import React from 'react'
import img1 from '../assets/bg1.jpg'
import About from './About'
import Portfolio from './Portfolio'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div
                id="carouselExampleCaptions"
                class="relative"
                data-te-carousel-init
                data-te-ride="carousel">




                <div
                    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

                    <div
                        class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-active
                        data-te-carousel-item
                    >
                        <img
                            src={img1}
                            class="block w-full"
                            alt="..." />
                        <div
                            class="absolute inset-x-[15%] top-20 hidden py-5 justify-center items-center text-center text-white md:block">
                            <h5 class="text-6xl font-mono">This is ALL-AI</h5>
                            <p className='mt-2'>
                                Responsive, Easy to Use, All in one GPT.
                            </p>
                            <button className='mt-4 border-2 border-gray-400 p-4 rounded-3xl w-52 hover:text-[#000000] hover:bg-[#ffff] transition-all ease-linear hover:border-none text-xl font-mono'>Explore</button>
                            <div className='mt-24'>
                                <About />
                            </div>
                            <div className='mt-8'>
                                <Portfolio />
                            </div>
                            <div className='text-3xl font-mono '>
                                <h1 >Maintained By <span className='underline underline-offset-4 '>Mohit Kumar Dubey</span></h1>
                                <div className='flex justify-center items-center mt-2 mb-4 gap-4'>
                                    <Link to={'https://github.com/Mohit030802'} target='_blank'>
                                    <GitHubIcon/>
                                    </Link>
                                    
                                    <Link to={'https://www.linkedin.com/in/mohit-kumar-dubey-7b5060203/'} target='_blank'>
                                    <LinkedInIcon/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </>
    )
}

export default Header
