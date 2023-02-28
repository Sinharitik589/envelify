import SideOptions from './SideOptions'

export default function SideBar() {
  return (
    <div className='p-2 flex flex-col justify-between layout-height'>
      <div>
      <SideOptions name="Home" icon='fa-sharp fa-solid fa-house'/>
      <SideOptions name="Starred" icon='fa-sharp fa-solid fa-house'/>
      <SideOptions name="Bin" icon='fa-sharp fa-solid fa-house'/>
      <SideOptions name="Recent" icon='fa-sharp fa-solid fa-house'/>
      </div>
      <div>
      jdjdj
      </div>
    </div>
  )
}
