import React, { ReactNode, useEffect, useRef } from 'react'

type DropDownProps ={
    children:ReactNode,
    alignment:string,
    onClick:Function
}

export default function DropDown({children,alignment,onClick}:DropDownProps) {

  const btnRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if(btnRef.current){
      btnRef.current.addEventListener("mouseleave",() =>{
        onClick()
      });
    }
  },[]) 

  return (
    <div ref={btnRef}  className={`absolute top-2/3 shadow-lg rounded-md z-10 w-80 py-2 bg-white ${alignment}`}>
    {
        children
    }
    </div>
  )
}
