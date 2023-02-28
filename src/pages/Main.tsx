import React from 'react'
import FileRow from '../components/FileRow'
import Files from '../components/Files'
import Folder from '../components/Folder'
import Title from '../components/Title'

export default function Main() {
  return (
    <>
        <Title name='Folders' />
        <section className='grid grid-cols-4 gap-4 folder-cont'>
            <Folder folderName='first' link='/'/>
            <Folder folderName='first' link='/'/>
            <Folder folderName='first' link='/'/>
            <Folder folderName='first' link='/'/>
            <Folder folderName='first' link='/'/>
            <Folder folderName='first' link='/'/>
        </section>
        <Title name='Files' />
        <section className="grid grid-cols-4 gap-4">
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
