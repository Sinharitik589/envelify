import React, { useEffect, useRef } from 'react'
import Icon from './Icon';
import { useStore } from '../context/StoreContext';

type buttonPropTypes = {
    text:string,
    onClick:Function,
    iconAfter?:string,
    iconBefore?:string,
    className?:string,
    onFocusIn?:Function,
    onFocusOut?:Function,
    simple?:Boolean,
    disabled?:boolean
}

export default function Button(props:buttonPropTypes) {

  const {text,onClick,iconAfter,iconBefore,className}= props;
  const btnRef = useRef<HTMLButtonElement>(null);
 

  useEffect(() => {
    if(!props.simple&&props.onFocusIn&&btnRef&&btnRef.current){
      btnRef.current.addEventListener("focusin",() =>{
        if(props.onFocusIn) props.onFocusIn()
      });
    }
  },[])

  return (
    <button disabled={props.disabled} onClick={() =>{if(props.onClick) onClick()}} ref={btnRef} className={props.simple?"bg-emerald-600  text-white rounded-sm p-1  hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-emerald-700 w-24 h-8 "+className:className}>
        {iconBefore?<Icon className={iconBefore}/>:props.simple?"":<Icon className=''/>}{text}{iconAfter?<Icon className={iconAfter}/>:props.simple?"":<Icon className=''/>}
    </button>
  )
}
