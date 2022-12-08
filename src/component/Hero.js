import React from 'react'
import drishyam from '../photo/drishyam.jpg'
import { FiPlayCircle } from 'react-icons/fi';

const Hero = () => {
  return (
   
 
    <div className=' relative flex w-full h-[15rem]
     sm:h-[25rem] md:h-[25rem] lg:h-[30rem] pt-5 px-5 '>
     <img 
        src={drishyam} alt=""
         className='object-cover 
        w-full rounded-[1rem] ' />

        <div className="absolute bottom-0 left-5 right-5
        pt-20 px-6 py-3 bg-gradient-to-t from-black 
        rounded-[1rem]">

        <h1 className='flex items-center gap-2 
        text-xl font-semibold text-white'> 
<FiPlayCircle className='text-3xl bg-slate-800
          rounded-full hover:bg-opacity-20'/>Drishyam 2 
           </h1>
         <p class="mt-2 text-sm text-gray-300">
         2022 ‧ Mystery ‧ 2h 25m</p>
       
       </div>
    </div>
    
  )
}

export default Hero