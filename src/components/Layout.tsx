import React , {ReactNode} from 'react'
import Header from './Header'
import SideBar from './SideBar'

type LayOutProps = {
    children:ReactNode
}

export default function Layout(props:LayOutProps) {
  return (
    <div className='w-full grid grid-cols-12 layout-height font-sans'>
        <div className="col-span-2 border-r border-r-gray-300 sidebar-height">
            <SideBar/>
        </div>
        <div className="col-span-10 grid grid-cols-12 layout-height ">
            <main className='col-span-11'>
                <header className='h-12 w-full border-b border-b-gray-300'>
                    <Header/>
                </header>
                <div className=' p-2 main-height overflow-auto'>
                    {props.children}
                </div>
            </main>
            <div className="col-span-1  h-full shadow-md layout-height"></div>
        </div>
        
    </div>
  )
}
