import React , {ReactNode, useEffect, useState} from 'react'
import { useStore } from '../context/StoreContext'
import FileInfo from './FileInfo'
import Header from './Header'
import SideBar from './SideBar'
import { useLocation } from 'react-router-dom'
type LayOutProps = {
    children:ReactNode
}

export default function Layout(props:LayOutProps) {

  const [loginScreen,setLoginScreen] = useState(false);  
  const [previewScreen,setPreviewScreen] = useState(false);
  const {info} = useStore();
  const location = useLocation()
  useEffect(() => {
    let arr = location.pathname.split("/");
    if(location.pathname==="/login"||location.pathname==="/register") setLoginScreen(true);
    else setLoginScreen(false);
    if(arr.length>1){
        let val =arr[1];
        if(val==='preview') {
            setLoginScreen(true)
            setPreviewScreen(true)
        }
    }
  },[location])


  return (
    <>
       {
        loginScreen?<div className={`w-full  grid-cols-12  layout-height font-sans dark:bg-slate-900 ${previewScreen?"":"flex justify-center items-center"}`}>{props.children}</div>:
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
       }
        
    </>
  )
}
