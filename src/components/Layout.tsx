import React , {ReactNode} from 'react'

type LayOutProps = {
    children:ReactNode
}

export default function Layout(props:LayOutProps) {
  return (
    <div className='w-full grid grid-cols-12 layout-height'>
        <div className="col-span-2 border-r border-r-gray-300 h-full">
        </div>
        <div className="col-span-10 grid grid-cols-12 h-full">
            <main className='col-span-11'>
                <header className='h-12 w-full border-b border-b-gray-300'>

                </header>
                <div>
                    {props.children}
                </div>
            </main>
            <div className="col-span-1  h-full shadow-md"></div>
        </div>
        
    </div>
  )
}
