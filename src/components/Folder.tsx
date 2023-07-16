import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '../context/StoreContext'
import DropdownWrapper from './DropdownWrapper'
import Icon from './Icon'
import { useNavigate } from 'react-router-dom'

type FolderPropTypes = {
    folderName:string,
    folderId:string,
    alignment:string
}




export default function Folder({folderName,alignment,folderId}:FolderPropTypes) {


  const navigate = useNavigate();
  const [link,setLink] = useState("");
  const {header,setHeader} = useStore();

  useEffect(() =>{
      let lnk = `/folders/${header}/${folderName}`;
      setLink(lnk);
  },[])

  const open = () => {
    console.log("okay")
    setHeader(`${header}/${folderName}`);
    navigate(link);
  }

  const dummyFunc  = [
    {
      name:"Open",func:open,icon:"fa-regular fa-folder-open text-gray-700 text-xl"
    }
  ]
  
  return (
    <div  className='cursor-pointer flex h-12 flex-row w-full  p-3 rounded-md border border-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-500'>
        <div className="basis-2/12 flex  h-full w-full items-center flex-row">
            <Icon className='fa-sharp fa-solid fa-folder text-2xl text-emerald-300'/>
        </div>
        <div className="basis-9/12 flex h-full w-full items-center font-medium text-gray-700 font-sans dark:text-white">
            {folderName}
        </div>
        <div className="basis-1/12">
        <DropdownWrapper folderName={folderId} as='dots' text='' funcArray={dummyFunc} alignment={alignment} btnClass="p-0 text-gray-900 bg-inherit hover:bg-inherit focus:bg-inherit focus:ring-0 dark:text-white"/>

        </div>
    </div>
  )
}
