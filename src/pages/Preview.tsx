import React, { useEffect , useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import Button from '../components/Button';

export default function Preview() {

    const params = useParams();
    const [searchParams] = useSearchParams()
    const [url,setUrl] = useState("");

     useEffect(() =>{
         let url = searchParams.get("url");
         setUrl(`https:/${url}`);
     },[])
 
  return (
    <div className='w-full h-full flex flex-col items-center '>
      <header className='h-14 w-full border-b border-gray-300 p-3 flex flex-row items-center'>
<a href={url} download>
  
<Button onClick={(e:any) =>{e.preventDefault()}} iconAfter='fa-solid fa-download' className="bg-emerald-600 text-white rounded-sm p-1  hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-emerald-700 width-content min-w-fit h-8 " text='Download'/>
  
   </a>       </header>  
       <div style={{height:400}} className='mt-10'>
    <img src={url} alt="" className='w-auto h-full' />
    </div>    
    </div>
  )
}
