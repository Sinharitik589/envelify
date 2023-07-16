import React from 'react'
import Icon from './Icon'
import DropdownWrapper from './DropdownWrapper'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'

type FileProps = {
  fileName:String,
  icon:string,
  alignment:string,
  src?:string,
  fkey:String,
  fid:String
}


export default function Files({fileName,icon,alignment,src,fkey,fid}:FileProps) {
  const navigate =useNavigate()
  const {setDeleteFile} = useStore();
  const dummyFunc  = [
    {
      name:"Preview",func:()=>{navigate(`/preview?url=${src}`)},icon:"fa-regular fa-eye text-gray-700 text-xl"
    },
    {
      name:"Delete",func:()=>{setDeleteFile({id:fid,key:fkey})},icon:"fa-solid fa-trash text-gray-700 text-xl"
    }
  ]
  return (
    <div className='w-full h-44 relative rounded-md border border-gray-300 p-2'>
        <div className="w-full h-full opacity-50">
          <img src={`https:/${src}`} alt="" className='w-full h-full' />
        </div>
        <div className="border-t h-12 flex flex-row rounded-br-md rounded-bl-md absolute bottom-0 w-full left-0  items-center bg-white">
          <div className="basis-1/6"><Icon className={icon}/></div>
          <div className="basis-4/6 text-lg overflow-hidden">{fileName}</div>
          <div className="basis-1/6" >
          <DropdownWrapper as='dots' text='' funcArray={dummyFunc} alignment={alignment} btnClass="p-0 text-gray-900 bg-inherit hover:bg-inherit focus:bg-inherit focus:ring-0 dark:text-white"/>
          </div>
        </div>
    </div>
  )
}
