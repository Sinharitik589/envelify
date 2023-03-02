import React, { useEffect, useState } from 'react'
import { useStore } from '../context/StoreContext';

export default function Toggle() {
  

 const {dark,setDark} = useStore();

 const setD = (val:Boolean) => {
    if(setDark) setDark(val);
 }

  return (
    <div onClick={() =>setD(!dark)} className={`h-7 rounded-3xl   w-14 relative ${dark?"bg-gray-200":"bg-black"}`}>
        {!dark&&<div onClick={() =>setD(false)} className="absolute rounded-full bg-gray-200 h-7 w-7 top-0 left-0"></div>}
        {dark&&<div onClick={() =>setD(true)} className="absolute rounded-full bg-black h-7 w-7 top-0 right-0"></div>}
    </div>
  )
}
