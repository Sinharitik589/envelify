import React, { ReactNode, useState } from 'react'
import Button from './Button'
import DropDown from './DropDown'
import DropdownOptions from './DropdownOptions'
import Icon from './Icon'

type DropDownWrapperTypes = {
    funcArray?:{name:string,func:Function,icon:string}[],
    as:string,
    buttonIconAfter?:string,
    buttonIconBefore?:string,
    onClick?:Function,
    btnClass?:string,
    text:string,
    alignment:string
}


export default function DropdownWrapper({btnClass,alignment,funcArray,as,text,buttonIconAfter,buttonIconBefore,onClick}:DropDownWrapperTypes) {
    
    const [dropdown,setDropdown] = useState(false);
    const onClik=() => setDropdown(true);
    const onFocusIn = () => {
        setDropdown(true);
    }
    const onFocusOut = () => setDropdown(false);
    return (
    <div className='relative w-fit mr-4'>
        {
            as=='button'?<Button className={btnClass}  text={text} iconBefore={buttonIconBefore} iconAfter={buttonIconAfter}  onClick={onClik} onFocusIn={onFocusIn} onFocusOut={onFocusOut} />:
            <Button  className={btnClass}  text='' iconBefore='fa-sharp fa-solid fa-ellipsis-vertical' onClick={onClik} onFocusIn={onFocusIn} onFocusOut={onFocusOut} />
        }
       {
        dropdown&& <DropDown alignment={alignment}><>{
            funcArray?.map(val=><DropdownOptions {...val} />)
        }</></DropDown>
       }
    </div>
  )
}
