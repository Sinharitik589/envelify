import React from 'react'

type TitleProps = {
    name:string,
}

export default function Title({name}:TitleProps) {
  return (
    <div className='flex flex-row justify-between my-2'>
        <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{name}</h3>
    </div>
  )
}
