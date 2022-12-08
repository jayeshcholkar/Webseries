import React from 'react'
import logo from '../photo/logo.png'
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillAppstore } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { BsClockHistory } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import Sidebar from './Sidebar';



const Leftside = () => {
  const sidebars = [
    { name:"Home", logo: <AiOutlineHome /> },
    { name:"Browse", logo: <AiFillAppstore /> },
    { name:"Explore", logo: <MdOutlineExplore /> },
  ]; 
  const side2bars = [
    { name:"History", logo: <BsClockHistory /> },
    { name:"Fevorite", logo: <AiFillStar /> },
    { name:"Downloaded", logo: <BsDownload /> },
  ]; 
  return (
    <div className='text-white pt-5 py-3 px-6 w-[25vw] 
    lg:w-[16vw] border-r border-gray-500'>
     {/* logo */}
    <div className=" h- w- ">
    <img src={logo} alt="" className='lg:h-[4rem]'/>
      </div>

      {/* Menu */}
      <div className=" "> 
      <p className='pt-9 text-gray-300'>MENU</p>
        <ul className='pt- space-y-1'>
        {sidebars.map((sidebar) => ( 
          <Sidebar name={sidebar.name} logo={sidebar.logo } />
        ))}
        </ul>
        </div>
        {/* Library */}
      <div className=" pt-6"> 
      <p className='text-gray-300'>LIBRARY</p>
        <ul className='pt- space-y-1'>
        {side2bars.map((sidebar) => ( 
          <Sidebar name={sidebar.name} logo={sidebar.logo } />
        ))}
        </ul>
        </div>
    </div>
  );
};

export default Leftside