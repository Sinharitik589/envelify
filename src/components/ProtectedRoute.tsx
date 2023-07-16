import React, { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext';

type RouteProp = {
    children:ReactNode
}

export default function ProtectedRoute({children}:RouteProp) {

 const navigate = useNavigate();
 const {authenticated} = useStore()

 useEffect(() => {
    if(!authenticated)  navigate("/login");
 },[navigate])

  return (
    <>{children}</>
  )
}
