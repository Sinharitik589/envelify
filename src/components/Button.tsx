import React, { useEffect, useRef } from 'react'
import Icon from './Icon';

type buttonPropTypes = {
    text:string,
    onClick?:Function,
    iconAfter?:string,
    iconBefore?:string,
    className?:string,
    onFocusIn?:Function,
    onFocusOut?:Function
}

export default function Button(props:buttonPropTypes) {

  const {text,onClick,iconAfter,iconBefore,className}= props;
  const btnRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    if(props.onFocusIn&&btnRef&&btnRef.current){
      btnRef.current.addEventListener("focusin",() =>{
        if(props.onFocusIn) props.onFocusIn()
      });
      btnRef.current.addEventListener("focusout",() =>{
        if(props.onFocusOut) props.onFocusOut()
      });
    }
  },[])


  return (
    <button ref={btnRef} className={className}>
        {iconBefore?<Icon className={iconBefore}/>:""}{text}{iconAfter?<Icon className={iconAfter}/>:""}
    </button>
  )
}
