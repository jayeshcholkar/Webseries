import React from 'react'

const Original = ({name}) => {
  return (
    
    <div className="">
     <div className='flex max-sm:h-24 max-sm:w-full
     h-60 w-full mx-auto hover:scale-95 duration-300'>
    <img src={name} alt="" 
    className='object-cover w-full rounded-[0.5rem] '/>
    </div> 
  </div>
     
  )
}

export default Original