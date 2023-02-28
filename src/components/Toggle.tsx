import React, { useState } from 'react'

export default function Toggle() {

  const [dark,setDark] = useState(false);
  return (
    <div onClick={() =>setDark(!dark)} className={`h-7 rounded-3xl   w-14 relative ${dark?"bg-gray-200":"bg-black"}`}>
        {!dark&&<div onClick={() =>setDark(false)} className="absolute rounded-full bg-gray-200 h-7 w-7 top-0 left-0"></div>}
        {dark&&<div onClick={() =>setDark(true)} className="absolute rounded-full bg-black h-7 w-7 top-0 right-0"></div>}
    </div>
  )
}
