import React from 'react'
import DropdownWrapper from './DropdownWrapper'
import Icon from './Icon'

type FolderPropTypes = {
    folderName:string,
    link:string,
    alignment:string,
    tabIndex:number
}

const dummyFunc  = [
  {
    name:"New File",func:()=>{console.log("New File")},icon:"fa-solid fa-file-medical text-gray-700 text-xl"
  }
]


export default function Folder({folderName,link,alignment,tabIndex}:FolderPropTypes) {
  return (
    <div tabIndex={tabIndex+100}  className='flex h-12 flex-row w-full  p-3 rounded-md border border-gray-300 hover:bg-emerald-50 focus:bg-emerald-100 '>
        <div className="basis-2/12 flex  h-full w-full items-center flex-row">
            <Icon className='fa-sharp fa-solid fa-folder text-2xl text-emerald-300'/>
        </div>
        <div className="basis-9/12 flex h-full w-full items-center font-medium text-gray-700 font-sans">
            {folderName}
        </div>
        <div className="basis-1/12">
        <DropdownWrapper as='dots' text='' funcArray={dummyFunc} alignment={alignment} btnClass="p-0 text-gray-900 bg-inherit hover:bg-inherit focus:bg-inherit focus:ring-0"/>

        </div>
    </div>
  )
}
