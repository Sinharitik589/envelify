import React, { useEffect, useRef } from 'react'
import { useStore } from '../context/StoreContext'
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

  const foldRef = useRef<HTMLDivElement>(null)
  const {setInfo} = useStore();

  useEffect(() => {
    if(foldRef&&foldRef.current){
      foldRef.current.addEventListener("focusin",(e) =>{
          if(setInfo&&e.target==foldRef.current) setInfo(true);
      });
      foldRef.current.addEventListener("focusout",(e) =>{
        // if(setInfo&&e.target==foldRef.current) setInfo(false);
      });
    }
  },[])
  
  return (
    <div ref={foldRef} tabIndex={tabIndex+100}  className='cursor-pointer flex h-12 flex-row w-full  p-3 rounded-md border border-gray-300 hover:bg-emerald-50 focus:bg-emerald-100 dark:focus:bg-gray-700 dark:hover:bg-gray-500'>
        <div className="basis-2/12 flex  h-full w-full items-center flex-row">
            <Icon className='fa-sharp fa-solid fa-folder text-2xl text-emerald-300'/>
        </div>
        <div className="basis-9/12 flex h-full w-full items-center font-medium text-gray-700 font-sans dark:text-white">
            {folderName}
        </div>
        <div className="basis-1/12">
        <DropdownWrapper as='dots' text='' funcArray={dummyFunc} alignment={alignment} btnClass="p-0 text-gray-900 bg-inherit hover:bg-inherit focus:bg-inherit focus:ring-0 dark:text-white"/>

        </div>
    </div>
  )
}
