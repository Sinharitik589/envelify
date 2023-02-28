import React from 'react'

type IconProps = {
    className:string,
    onClick?:Function
}

export default function Icon({className,onClick}:IconProps) {
  return (
    <i className={"mx-2  "+className} onClick={() =>{
      if(onClick) onClick()
    }}></i>
  )
}
