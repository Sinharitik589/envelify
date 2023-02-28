import React from 'react'
import Icon from './Icon'

type SideOptionsProps = {
    name:string,icon:string
}

export default function SideOptions({name,icon}:SideOptionsProps) {
  return (
    <div className='w-full rounded-2xl flex items-center hover:bg-emerald-100 p-1 text-gray-600 h-10 text-sm cursor-pointer'>
        <span className='mr-1'><Icon className={icon}></Icon></span><span className='font-sans'>{name}</span>
    </div>
  )
}
