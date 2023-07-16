import React from 'react'
import Icon from './Icon'

type DropdownOptionsProps = {
    name:string,func:Function,icon:string
}

export default function DropdownOptions({name,func,icon}:DropdownOptionsProps) {
  return (
    <div onClick={() =>func()} className='w-full hover:bg-gray-300 p-1 text-gray-600 text-sm cursor-pointer'>
        <span className='mr-1'><Icon className={icon}></Icon></span><span className='font-sans'>{name}</span>
    </div>
  )
}
