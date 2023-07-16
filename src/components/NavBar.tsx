import React , {ReactNode, useEffect, useState} from 'react'
import Icon from './Icon'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useStore } from '../context/StoreContext';

export default function NavBar() {

  const [loginScreen,setLoginScreen] = useState(false);  
  const [previewScreen,setPreviewScreen] = useState(false);
  const {setAuthenticated,authenticated} = useStore()
  const location = useLocation()
  const navigate = useNavigate()
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

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated("");
    navigate("/login");
  }

  return (
    <nav className="shadow-md grid  grid-cols-12 justify-between h-16 w-full p-2 pl-0 pr-0 dark:bg-slate-900 dark:border-white dark:border-b">
        <div className=' col-span-2'>
          <Link to="/" className='flex flex-row px-2 font-semibold'>
          <img src={"/logo.png"} className="h-10" alt="" />
          <label style={{lineHeight:"2.5rem"}} className='text-xl text-gray-500 dark:text-white'>Envelify</label>
        
          </Link>
          </div>
        <div className='w-full  col-span-8 flex flex-row  justify-start'>
          {
            loginScreen?"":<div className="col-span-8 w-full basis-5/6 flex flex-row bg-gray-100 rounded-md flex-1/4 p-1">
            <div className="basis-1/12  flex justify-center items-center">
              <Icon className='fa-solid fa-magnifying-glass text-xl text-gray-500' />
            </div>
            <div className="basis-11/12 ">
              {!previewScreen&&<input type="text" className='w-full h-full bg-inherit border-none outline-none text-gray-500' placeholder='Search files' />}
            </div>
          </div>
          }
        </div>
        <div className="col-span-2 w-full flex justify-end pr-3 items-center ">
         {authenticated&& <Button text="Logout" simple onClick={logout} className='bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-gray-300 focus:bg-gray-700' />
        }</div>
    </nav>
  )
}
