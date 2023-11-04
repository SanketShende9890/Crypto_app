import React from 'react';
import mediaIllustration from '../assets/illustration/media_illustration.png';
import {FiArrowLeftCircle , FiArrowRightCircle} from 'react-icons/fi';

const Media = () => {
  return (
    <section className="mt-20 lg:mt-10 overflow-hidden relative">
      <div className="overflow-hidden relative mx-auto mt-8 max-w-7xl px-3 flex justify-center items-center flex-col lg:flex-row">
        <div className="relative overflow-hidden w-full flex flex-col md:flex-row justify-center items-center px-6 lg:pl-8 mt-8">
          <div className="flex flex-col justify-center items-center text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold">
            What media says about Cryptolly?
            </h1>
            <p className="text-lg mt-6" style={{ lineHeight: "24px" }}>
            “Derivative exchange America-based Cryptolly believes they will continue to grow in 2020.”
            </p>
            <span className='block mt-3 font-bold text-gray-500'>
                Newsweek, 2020
            </span>
            <div className="mt-10 flex justify-start items-center">
             <FiArrowLeftCircle className='text-3xl mr-6 cursor-pointer hover:text-gray-400' />
             <FiArrowRightCircle className='text-3xl cursor-pointer hover:text-gray-400'/>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden w-full flex flex-col md:flex-row justify-center items-center px-6 lg:pl-8 mt-8">
          <img src={mediaIllustration} alt="" />
        </div>

      </div>
    </section>
  )
}

export default Media