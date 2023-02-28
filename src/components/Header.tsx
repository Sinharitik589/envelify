import Button from './Button'
import DropdownWrapper from './DropdownWrapper'

const dummyFunc  = [
  {
    name:"New File",func:()=>{console.log("New File")},icon:"fa-solid fa-file-medical text-gray-700 text-xl"
  }
]

export default function Header() {
  return (
    <div className='p-2 flex flex-row'>
      <DropdownWrapper btnClass='bg-emerald-600 text-white rounded-sm p-1 text-sm hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-emerald-700' alignment='left-full' as='button' text='Upload' funcArray={dummyFunc} buttonIconBefore='fa-sharp fa-solid fa-upload' buttonIconAfter='fa-sharp fa-solid fa-angle-down'/>
      <Button className='mr-1 bg-emerald-600 text-white rounded-sm p-1 text-sm hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:bg-emerald-700' text={"Create "} iconBefore='fa-sharp fa-solid fa-plus' iconAfter="fa-sharp fa-solid fa-angle-down" onClick={() =>{console.log("Hello")}}/>
    </div>
  )
}
