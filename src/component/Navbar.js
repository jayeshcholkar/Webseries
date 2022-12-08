import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import profile from '../photo/profile.jpg'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center 
    py-3 px-6 text-white" >
        {/* leftside */}
        <div className="flex items-center gap-4">
            <div className="">
                <p className="text-[#eb3b75]">Movies</p>
                <div className="w-full h-[2px]
                 bg-[#eb3b75]"></div>
            </div>
            <div className=" relative group">
                <p className="">Series</p>
                <div className="absolute hidden group-hover:inline-flex
                 w-full h-[2px]
                 bg-[#eb3b75]"></div>
            </div>
            <div className=" relative group">
                <p className="">Anime</p>
                <div className=" absolute hidden group-hover:inline-flex 
                w-full h-[2px]
                 bg-[#eb3b75]"></div>
            </div>
        </div>
        {/* centre */}
         <div className="hidden md:flex relative items-center">
        <input
         type="text"
          className="bg-white rounded-full text-black
     py-0.5 px-5 placeholder:text-[15px] pl-8 outline-none"
          placeholder="Search"/>
         
         <div className="absolute left-2">
     <AiOutlineSearch color='black'/>
         </div>
           </div>
        {/* rightside */}
        <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
        <div className="w-2.5 h-2.5 bg-green-500
        rounded-full"></div>
            <div className="text-[13px]">
                <p>Premium Member</p>
            </div>
        </div>
        <div className="relative">
        <div className=" absolute w-2 h-2 right-0 
        rounded-full bg-red-600"></div>
            <BsBell className="text-[18px]" />
        </div>
        <div className="relative">
        <div className="flex w-10 h-10 ">
            <img src={profile} alt="" className="object-cover"/>
        </div> 
        <div className="absolute right-0 bottom-1 w-2 h-2
         bg-green-500 rounded-full p-1 border"></div>
    </div>
  </div>
</div>
  )
}

export default Navbar