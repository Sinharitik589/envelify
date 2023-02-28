import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

type SideOptionsProps = {
    name:string,icon:string,path:string,selected:Boolean
}

export default function SideOptions({name,icon,path,selected}:SideOptionsProps) {
  return (
    <Link to={path}>
      <div className={`w-full rounded-2xl flex items-center p-1 text-gray-500 h-10 text-md  cursor-pointer ${selected?"bg-emerald-200":"hover:bg-emerald-100"}`}>
        <span className='mr-1'><Icon className={icon}></Icon></span><span className='font-sans'>{name}</span>
    </div>
    </Link>
  )
}
