import React from 'react'
import { getFileIcon } from '../utils/utilFunc1'
import Icon from './Icon'

type FileRowProps = {
  name:string,
  size:number,
  modified:string,
  owner:string,
  filetype?:string,
  title?:boolean
}

export default function FileRow({name,size,modified,owner,title,filetype}:FileRowProps) {
  return (
    <div className='flex flex-row h-10  border-b border-gray-300 w-full font-sans dark:text-white'>
      <div className={`basis-1/2 h-full text-sm ${title?"font-medium":""}`}>

        <div className='flex items-center h-full'>{title?"":<Icon className={getFileIcon(filetype?filetype:"folder")}/>}{name}</div>
      </div>
      <div className={`basis-1/6 h-full text-sm ${title?"font-medium":""}`}>
        <div className='flex items-center h-full'>{owner}</div>
      </div>
      <div className={`basis-1/6 h-full text-sm ${title?"font-medium":""}`}>
        <div className='flex items-center h-full'>{modified}</div>
      </div>
      <div className={`basis-1/6 h-full text-sm ${title?"font-medium":""}`}>
        <div className='flex items-center h-full'>{title?"Size":size}</div>
      </div>
    </div>
  )
}
