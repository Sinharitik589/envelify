import React from 'react'
import Icon from './Icon'

export default function NavBar() {
  return (
    <nav className="shadow-md grid  grid-cols-12 justify-between h-16 w-full p-2 pl-0 pr-0">
        <div className='flex flex-row px-2 font-semibold col-span-2'>
          <img src={"./logo.png"} className="h-10" alt="" />
          <label style={{lineHeight:"2.5rem"}} className='text-xl text-gray-500'>Envelify</label>
        </div>
        <div className='w-full  col-span-8 flex flex-row  justify-start'>
          <div className="col-span-8 w-full basis-5/6 flex flex-row bg-gray-100 rounded-md flex-1/4 p-1">
            <div className="basis-1/12  flex justify-center items-center">
              <Icon className='fa-solid fa-magnifying-glass text-xl text-gray-500' />
            </div>
            <div className="basis-11/12 ">
              <input type="text" className='w-full h-full bg-inherit border-none outline-none text-gray-500' placeholder='Search files' />
            </div>
          </div>
        </div>
    </nav>
  )
}
