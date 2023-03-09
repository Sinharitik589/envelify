import React from 'react'
import { useStore } from '../context/StoreContext'
import Icon from './Icon'

export default function FileInfo() {

   const {setInfo, info} = useStore() 

   const setInf = () => {
    if(setInfo) setInfo(false);
   }
  return (
    <div className='p-1 relative'>
       {info&& <div className="absolute top-0 right-0"><Icon onClick={setInf} className='fa-solid fa-sharp fa-x' /></div>
    }</div>
  )
}
