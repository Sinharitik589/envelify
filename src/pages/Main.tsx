import React from 'react'
import FileRow from '../components/FileRow'
import Files from '../components/Files'
import Folder from '../components/Folder'
import Title from '../components/Title'
import { useStore } from '../context/StoreContext'

const dummyFolders = () => {
  let folders = [];
  for(let x=0;x<9;x++){
    folders.push(x);
  }
  return folders;
}

export default function Main() {

  const {info} = useStore();
  return (
    <>
        <Title name='Folders' />
        <section className={`grid  gap-4 folder-cont ${info?"grid-cols-3":"grid-cols-4"}`}>
           {
            dummyFolders().map((val,i) =>{
              return <Folder tabIndex={i} alignment={i%4==0?"left-4":"right-4"} folderName='first' link='/'/>
            })
           }
        </section>
        <Title name='Files' />
        <section  className={`grid  gap-4  ${info?"grid-cols-3":"grid-cols-4"}`}>
            <Files/>
            <Files/>
            <Files/>
            <Files/>
            <Files/>
        </section>
        <Title name='File ' />
        <section className='flex flex-col '>
            <FileRow name='Name' owner='Owner' modified='Last Modified' size={0} title={true} />
            <FileRow name='File1' owner='me' modified='last week' size={20}/>
            <FileRow name='File1' owner='me' modified='last week' size={20}/>
        </section>
    </>
  )
}
