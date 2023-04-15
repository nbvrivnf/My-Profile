import React from 'react'
import Profile from '../asses/porfile.png'


function Hero() {
  return (
    <div>
          <div className='text-gray-700 flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center' id='hero'>
      <div className='md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
          Hi ! <br />I'm Alfred <br />Web Developer
          </h1>
        <p className='mb-8 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore cumque error harum ab ducimus modi voluptas porro odit quas eos.
          </p>
        <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-200 duration-300'>Contact</button>
      </div>
      <div className='md:w-1/2 lg:max-w-lg w-5/6'>
        <img src={Profile} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Hero;
