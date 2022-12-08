import React from 'react'

const Original = ({name}) => {
  return (
    
    <div className="">
     <div className='flex max-sm:w-11/12 max-sm:h-44 
     h-50 w-full mx-auto hover:scale-95 duration-200'>
    <img src={name} alt="" 
    className='object-cover w-full rounded-[0.5rem] '/>
    </div> 
  </div>
     
  )
}

export default Original