import React from 'react'
import img1 from '../photo/img1.jpg';
import img2 from '../photo/img2.jpg';
import img3 from '../photo/img3.jpg';
import img4 from '../photo/img4.jpg';
import img5 from '../photo/img5.jpg';
import img6 from '../photo/img6.jpg';

import Original from './Original';

const Originals = () => { 
    const imgs = [img1, img2, img3];
    const imgs2 = [img4, img5, img6];
  return (
    <div>
        <p className='pt-6 px-5 text-white font-semibold'>
        Originals</p>
        <div className="grid grid-cols-1 sm:grid-cols-3
        items-center justify-between pt-4 px-5 gap-4">
            {imgs.map((img) => (
            <Original name={img}/>
            ))}
        </div>
        <div className="max-sm:hidden">
           <ul  className=' grid grid-cols-1 sm:grid-cols-3 
        items-center justify-between pt-2 px-5 gap-5'>
             <p className=' text-gray-400 hover:text-white '>
             Avatar The Way Of Water
             </p>
             <p className=' text-gray-400 hover:text-white'>
             Guardians Of The Galaxy
             </p>
             <p className=' text-gray-400 hover:text-white'>
             Wakanda Forever
             </p>
             </ul> 
             </div>
        <p className='pt-6 px-5 text-white font-semibold'>
        Trending now</p>
        <div className="  grid grid-cols-1 sm:grid-cols-3 
        items-center justify-between pt-4 px-5 gap-4">
            {imgs2.map((img) => (
            <Original name={img}/>
            ))}
        </div>
            <div className="max-sm:hidden ">
           <ul  className=' grid grid-cols-1 sm:grid-cols-3 
        items-center justify-between pt-2 px-5 gap-5'>
             <p className=' text-gray-400 hover:text-white '>
             Ant-Man and the Wasp: Quantumania
             </p>
             <p className=' text-gray-400 hover:text-white'>
             Kantara
             </p>
             <p className=' text-gray-400 hover:text-white'>
             John Wick: Chapter 4
             </p>
             </ul> 
             </div>
             
          </div> 
  )
}

export default Originals