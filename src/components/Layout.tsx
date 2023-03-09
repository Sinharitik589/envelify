import React , {ReactNode, useState} from 'react'
import { useStore } from '../context/StoreContext'
import FileInfo from './FileInfo'
import Header from './Header'
import SideBar from './SideBar'

type LayOutProps = {
    children:ReactNode
}

export default function Layout(props:LayOutProps) {

  const {info} = useStore();
  return (
    <div className='w-full grid grid-cols-12 layout-height font-sans dark:bg-slate-900'>
        <div className="col-span-2 border-r border-r-gray-300 sidebar-height  dark:border-b dark:border-white">
            <SideBar/>
        </div>
        <div className="col-span-10 grid grid-cols-12 layout-height ">
            <main className={info?'col-span-8':'col-span-11'}>
                <header className='h-12 w-full border-b border-b-gray-300'>
                    <Header/>
                </header>
                <div className=' p-2 main-height overflow-auto container'>
                    {props.children}
                </div>
            </main>
            <div className={`h-full shadow-md layout-height ${info?'col-span-4':'col-span-1'} dark:border-l dark:border-white`}>
                <FileInfo />
            </div>
        </div>
        
    </div>
  )
}
