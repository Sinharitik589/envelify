import React, { useEffect, useState } from 'react'


type FormInputProps = {
    id:String,
    label:String,
    error?:String,
    setValue:Function,
    type?:string
}

export default function({id,label,setValue,error,type="text"}:FormInputProps)
{

 const [inp,setInp] = useState("");

 useEffect(() =>{
    setValue(inp)
 },[inp])
  return (
    <div className='mt-1'>
        <div className='mb-0.5 text-gray-500'>{label}</div>
        <input className='mb-0.5 w-full p-3 rounded border-none outline-none text-gray-500 bg-gray-100 h-12' type={type} onChange={(e) =>{
            setInp(e.target.value)
        }} />
        {error&&<p className='text-red-600'>{error}</p>}
    </div>
  )
}
