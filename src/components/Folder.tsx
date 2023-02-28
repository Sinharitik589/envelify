import React from 'react'
import DropdownWrapper from './DropdownWrapper'
import Icon from './Icon'

type FolderPropTypes = {
    folderName:string,
    link:string,
}

const dummyFunc  = [
  {
    name:"New File",func:()=>{console.log("New File")},icon:"fa-solid fa-file-medical text-gray-700 text-xl"
  }
]


export default function Folder({folderName,link}:FolderPropTypes) {
  return (
    <div className='flex h-12 flex-row w-full  p-3 rounded-md border border-gray-300 '>
        <div className="basis-2/12 flex  h-full w-full items-center flex-row">
            <Icon className='fa-sharp fa-solid fa-folder text-2xl text-emerald-300'/>
        </div>
        <div className="basis-9/12 flex h-full w-full items-center font-medium text-gray-700 font-sans">
            {folderName}
        </div>
        <div className="basis-1/12">
        <DropdownWrapper as='dots' text='' funcArray={dummyFunc} alignment="right-4" btnClass="p-0 text-gray-900 bg-white hover:bg-white focus:bg-white focus:ring-0"/>

        </div>
    </div>
  )
}
