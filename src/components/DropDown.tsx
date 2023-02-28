import React, { ReactNode } from 'react'

type DropDownProps ={
    children:ReactNode,
    alignment:string
}

export default function DropDown({children,alignment}:DropDownProps) {
  return (
    <div className={`absolute top-2/3 shadow-lg rounded-md z-10 w-80 py-2 bg-white ${alignment}`}>
    {
        children
    }
    </div>
  )
}
