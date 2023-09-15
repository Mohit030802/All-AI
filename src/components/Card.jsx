import React from 'react'
import { Link, redirect } from 'react-router-dom';

const Card = ({ image, CardTitle, CardDescription,link }) => {
  return (
    <>
      <div className="w-full  px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto  mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>

            <h3>
              <a
                href="/#"
                className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color text-gray-500">{CardDescription}</p>
            <Link to={`${link}`}> 
              <button className='mt-4 border-2 border-gray-400 p-4 rounded-3xl w-52 hover:text-[#000000] hover:bg-[#ffff] transition-all ease-linear hover:border-none text-lg font-mono'>Use {CardTitle}</button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Card
