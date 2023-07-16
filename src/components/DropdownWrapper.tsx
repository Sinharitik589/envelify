import React, { ReactNode, useState } from 'react'
import Button from './Button'
import DropDown from './DropDown'
import DropdownOptions from './DropdownOptions'
import Icon from './Icon'
import { useStore } from '../context/StoreContext'

type DropDownWrapperTypes = {
    funcArray?:{name:string,func:Function,icon:string}[],
    as:string,
    buttonIconAfter?:string,
    buttonIconBefore?:string,
    onClick?:Function,
    btnClass?:string,
    text:string,
    alignment:string,
    folderName?:string
}


export default function DropdownWrapper({btnClass,alignment,funcArray,as,text,buttonIconAfter,buttonIconBefore,onClick,folderName}:DropDownWrapperTypes) {
    
    const [dropdown,setDropdown] = useState(false);
     const {setFolderSelected,folderSelected} = useStore()
    const onClik=() => setDropdown(true);
    const onFocusIn = () => {
        setDropdown(true);
    }
    const onFocusOut = () => {
        setDropdown(false);
        setFolderSelected("")
    };
    return (
    <div className='relative w-fit mr-4'>
        {
            as=='button'?<Button className={btnClass}  text={text} iconBefore={buttonIconBefore} iconAfter={buttonIconAfter}  onClick={onClik} onFocusIn={onFocusIn} onFocusOut={onFocusOut} />:
            <Button  className={btnClass}  text='' iconBefore='fa-sharp fa-solid fa-ellipsis-vertical' onClick={onClik} onFocusIn={onFocusIn} onFocusOut={onFocusOut} />
        }
       {
        dropdown&& <DropDown onClick={onFocusOut} alignment={alignment}><>{
            funcArray?.map(val=><DropdownOptions {...val} />)
        }</></DropDown>
       }
    </div>
  )
}
