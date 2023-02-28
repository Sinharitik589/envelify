import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import SideOptions from './SideOptions'
import Toggle from './Toggle';

export default function SideBar() {

  const location =useLocation();
  const [curr,setCurr] = useState<string>("/")

  useEffect(() =>{
    setCurr(location.pathname);
  },[location])

  return (
    <div className='p-2 flex flex-col justify-between layout-height'>
      <div className='basis-11/12'>
        <SideOptions name="Home" selected={curr==="/"} path='/' icon='fa-sharp fa-solid fa-house'/>
        <SideOptions name="Starred" selected={curr==="/starred"} path='/starred' icon='fa-sharp fa-solid fa-star'/>
        <SideOptions name="Bin" selected={curr==="/bin"} path='/bin' icon='fa-sharp fa-solid fa-trash'/>
        <SideOptions name="Shared" selected={curr==="/shared"} path='/shared' icon='fa-sharp fa-solid fa-user-group'/>
        <SideOptions name="Recent" selected={curr==="/recent"} path='/recent' icon='fa-sharp fa-solid fa-clock'/>
      </div>
      <div className='basis-1/12'>
        <Toggle/>
      </div>
    </div>
  )
}
