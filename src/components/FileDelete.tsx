import React, { useState } from 'react'
import FormInput from './FormInput'
import Button from './Button';
import { createFolder, deleteFileFunc, fetchFiles, fetchFolders } from '../apirequest/api';
import { useStore } from '../context/StoreContext';

export default function FileDelete
() {
  const [folderName,setFolderName] = useState("");
  const [loading,setLoading] = useState(false);
  const {header,setCreateFolder,setFolders,deleteFile,setDeleteFile,setFiles} = useStore()

  const deleteFileFn = async () => {
     try{
       setLoading(true);
       await deleteFileFunc(deleteFile.key,deleteFile.id);
       const val = await fetchFiles(header);
       setFiles(val.data);
       setLoading(false);
       setDeleteFile(null);
     }
     catch(e){
      setLoading(false);
      console.log(e)
     }
  }

  return (
    <div className='bg-white w-72 rounded-lg p-2 h-fit'>
        <h3 className='text-2xl text-center mb-2'>Delete File</h3>
        <h3 className='text-xl  mb-2'>Are you sure you want to delete</h3>
        <div className="flex justify-end mt-4">
            <Button disabled={loading} onClick={() =>{setDeleteFile(null)}} simple text="Close" className='w-fit mr-1 bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-300 focus:bg-gray-700' />
            <Button disabled={loading} onClick={deleteFileFn}  simple text={loading?"Deleting ...":"Delete"} className='w-fit' />
        </div>
    </div>
  )
}
