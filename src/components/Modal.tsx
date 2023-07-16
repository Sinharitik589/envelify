import React, { ReactNode } from 'react'

type ModalProps = {
    children:ReactNode
}

export default function Modal
({children}:ModalProps) {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center' style={{background:"rgb(0,0,0,0.4)"}}>
        {children}
    </div>
  )
}
