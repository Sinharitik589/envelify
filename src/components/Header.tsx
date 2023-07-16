import { useEffect, useState } from 'react';
import { useStore } from '../context/StoreContext'
import Button from './Button'
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { createFile, fetchFiles, getSigned } from '../apirequest/api';
import axios from 'axios';



export default function Header() {
  const {header,setCreateFolder,file,setFile,setFiles,setCreateFile,setCancelRequest,setFilePercent} = useStore();
  const [headerArray,setHeaderArray] = useState(["Home"]);

  const progress = (progressEvent:any) => {
    var percent = (progressEvent.loaded / progressEvent.total) * 100;
    setFilePercent(percent.toFixed(0));
  }

  useEffect(() => {
    let hdarray = header.split("/");
    setHeaderArray(hdarray);
  },[header])

  const getSignedAndUpload = async (file:any) => {
    // const data = await getSigned()
    const controller = new AbortController();
    setCancelRequest(controller);
    let name = `${header}/${file.name}`;
    let type = file.type;
    const data = await getSigned(type,name);
    const val = await axios.put(data.url,file,{
      signal: controller.signal,
      onUploadProgress:progress
    })
    await createFile(header,file.name,name);
    const files = await fetchFiles(header);
    setFiles(files.data);
    
  }

  const saveFile = (e:any) => {
    const file = e.target.files[0];
    setFile(file);
    setCreateFile(true);
    getSignedAndUpload(file);
  }

  const createLinks = (val:string):any => {
    if(val==="Home") return <Link to="/" >{val}</Link>
    else return <><span>/</span><Link to={`/folders/Home/${val}`}>{val}</Link></>
  }
 
  return (
    <div className='p-2 flex flex-row justify-between '>
      <div>
      <Button simple onClick={() =>{setCreateFolder(true)}}  text='Create Folder'  iconBefore='fa-sharp fa-solid fa-plus' className='mr-2 w-fit'/>
      <label  htmlFor='inp'  className='bg-emerald-600  text-white rounded-sm p-1  hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-emerald-700 w-24 h-8'>
        <span><Icon className='fa-solid fa-file-medical mr-1'/></span>
        <span >Upload File</span>
      </label>
      <input type="file" name="" onChange={(e) => saveFile(e)} id="inp" style={{visibility:"hidden"}} />
      </div>
      <div className='text-lg text-gray-500 font-semibold'>
        {headerArray.map(val=>createLinks(val))}
      </div>
   </div>
  )
}
