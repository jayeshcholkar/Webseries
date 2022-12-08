import React from 'react'
import {  Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FiPlayCircle } from 'react-icons/fi';
import img2 from '../photo/img2.jpg';
import img3 from '../photo/img3.jpg';
import img5 from '../photo/img5.jpg';
import img6 from '../photo/img6.jpg';


const Slide = () => {
  return (
    <div className="">

    <div className=''>
       <Swiper
        modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>

        <SwiperSlide className='relative flex w-full h-[15rem]
     md:h-[25rem] sm:h-[25rem]  lg:h-[33rem] pt-5 px-5'>
        <img src={img3} alt="" className='object-cover 
       w-full h-[30rem] max-sm:h-48 rounded-[1rem] '/>
       <div className="absolute bottom-0 left-5 right-5
        pt-20 px-6 py-3 bg-gradient-to-t from-black 
        rounded-[1rem]">

        <h1 className='flex items-center gap-2 
        text-xl font-semibold text-white'> 
<FiPlayCircle className='text-3xl bg-slate-800
          rounded-full hover:bg-opacity-20'/>Black Panther: Wakanda Forever
 
           </h1>
         <p class="mt-2 text-sm text-gray-300">
         U/A 2022 ‧ Action/Adventure ‧ 2h 41m</p>
       
       </div>
      </SwiperSlide>
      
      <SwiperSlide className='relative flex w-full h-[15rem]
     md:h-[25rem] sm:h-[25rem]  lg:h-[33rem] pt-5 px-5'>
        <img src={img2} alt="" className='object-cover 
       w-full h-[30rem] max-sm:h-48 rounded-[1rem] '/>
       <div className="absolute bottom-0 left-5 right-5
        pt-20 px-6 py-3 bg-gradient-to-t from-black 
        rounded-[1rem]">

        <h1 className='flex items-center gap-2 
        text-xl font-semibold text-white'> 
<FiPlayCircle className='text-3xl bg-slate-800
          rounded-full hover:bg-opacity-20'/>Guardians of the Galaxy Vol. 3
</h1>
         <p class="mt-2 text-sm text-gray-300">
         U/A 2023 ‧ Adventure/Sci-fi ‧ 2h 23m</p>
       
       </div>
      </SwiperSlide>

      <SwiperSlide className='relative flex w-full h-[15rem]
     md:h-[25rem] sm:h-[25rem]  lg:h-[33rem] pt-5 px-5'>
        <img src={img5} alt="" className='object-cover 
       w-full h-[30rem] max-sm:h-48 rounded-[1rem] '/>
       <div className="absolute bottom-0 left-5 right-5
        pt-20 px-6 py-3 bg-gradient-to-t from-black 
        rounded-[1rem]">

        <h1 className='flex items-center gap-2 
        text-xl font-semibold text-white'> 
<FiPlayCircle className='text-3xl bg-slate-800
          rounded-full hover:bg-opacity-20'/>Kantara
           </h1>
         <p class="mt-2 text-sm text-gray-300">
         U/A 2022 ‧ Drama/Action ‧ 2h 30m</p>
       
       </div>
      </SwiperSlide>

      <SwiperSlide className='relative flex w-full h-[15rem]
     md:h-[25rem] sm:h-[25rem]  lg:h-[33rem] pt-5 px-5'>
        <img src={img6} alt="" className='object-cover 
       w-full h-[30rem] max-sm:h-48 rounded-[1rem] '/>
       <div className="absolute bottom-0 left-5 right-5
        pt-20 px-6 py-3 bg-gradient-to-t from-black 
        rounded-[1rem]">

        <h1 className='flex items-center gap-2 
        text-xl font-semibold text-white'> 
<FiPlayCircle className='text-3xl bg-slate-800
          rounded-full hover:bg-opacity-20'/>John Wick: Chapter 4


           </h1>
         <p class="mt-2 text-sm text-gray-300">
         2023 ‧ Action/Thriller ‧ 2h 25m</p>
       
       </div>
      </SwiperSlide>
      
      
    </Swiper>
      </div>
     </div>
  )
}

export default Slide