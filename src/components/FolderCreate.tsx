import React, { useState } from 'react'
import FormInput from './FormInput'
import Button from './Button';
import { createFolder, fetchFolders } from '../apirequest/api';
import { useStore } from '../context/StoreContext';

export default function FolderCreate
() {
  const [folderName,setFolderName] = useState("");
  const [loading,setLoading] = useState(false);
  const {header,setCreateFolder,setFolders} = useStore()

  const createFold = async () => {
     try{
       setLoading(true);
       await createFolder(header,folderName)
       const val = await fetchFolders(header);
       setFolders(val.data);
       setLoading(false);
       setCreateFolder(false);
     }
     catch(e){
      setLoading(false);
      console.log(e)
     }
  }

  return (
    <div className='bg-white w-72 rounded-lg p-2 h-fit'>
        <h3 className='text-2xl text-center mb-2'>Create Folder</h3>
        <FormInput id="" label="Folder Name" setValue={setFolderName} />
        <div className="flex justify-end mt-4">
            <Button disabled={loading} onClick={() =>{setCreateFolder(false)}} simple text="Close" className='w-fit mr-1 bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-300 focus:bg-gray-700' />
            <Button disabled={loading} onClick={createFold}  simple text={loading?"Creating ...":"Create"} className='w-fit' />
        </div>
    </div>
  )
}
