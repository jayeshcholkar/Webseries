import React from 'react'

const Sidebar = ({name, logo}) => {
  return (
    <div className='flex items-center gap-2 w-10 h-10
     pt-4 hover:scale-95 duration-150 '>
    <div className=" text-[27px] ">{logo}</div>
    <p className='text-[15px] hidden lg:block'>{name}</p>
    </div>
  )
}

export default Sidebar