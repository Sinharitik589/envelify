import React, { useEffect } from 'react'
import { useStore } from '../context/StoreContext'

export default function FileUpload() {

  const {file,filePercent,setCreateFile} = useStore();  

  useEffect(() => {
    if(filePercent==100) setCreateFile(false);
  },[filePercent])

  return (
    <div className='absolute bottom-2 right-3 bg-white w-96 rounded-lg border-2 border-emerald-800  h-28 shadow-lg'>
        <div className="h-10 p-1 bg-emerald-100 rounded-tl-lg rounded-tr-lg ">
            <h3 className="text-xl font-medium">Uploading 1 Object</h3>
        </div>
        <div className="h-10">{file?.name}  {filePercent}</div>

    </div>
  )
}
