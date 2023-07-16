import Files from '../components/Files'
import Folder from '../components/Folder'
import Title from '../components/Title'
import { useStore } from '../context/StoreContext'
import Modal from '../components/Modal'
import FolderCreate from '../components/FolderCreate'
import { useEffect, useState } from 'react'
import { fetchFiles, fetchFolders } from '../apirequest/api'
import { FolderType } from '../utils/types'
import { useLocation } from 'react-router-dom'
import FileUpload from '../components/FileUpload'
import FileDelete from '../components/FileDelete'

export default function Main() {

  const {info,setHeader} = useStore();
  const location = useLocation()

  const {createFolder,folders,header,setFolders,createFile,files,setFiles,deleteFile} = useStore();
  const fetchFoldersAndFiles = async () =>{
    setFolders([])
    setFiles([])
    const [folder,file] = await Promise.all([fetchFolders(header),fetchFiles(header)]);
    setFiles(file.data);
    setFolders(folder.data)
  }
  useEffect(() =>{
    console.log({path:location.pathname})
    if(location.pathname==="/") setHeader("Home");
    else{
      let folders = location.pathname.split("/");
      let hd="Home";
      if(folders.length>1){
        if(folders[1]=='folders') {
          for(let x=3;x<folders.length;x++){
            hd+=`/${decodeURIComponent(folders[x])}`
          }
          setHeader(hd);
        }
      }
    }
    fetchFoldersAndFiles()
    
  },[header,location])


  return (
    <>
        {
          folders.length>0&&<>
          <Title name='Folders' />
          <section className={`grid  gap-4 folder-cont ${info?"grid-cols-3":"grid-cols-4"}`} style={{minHeight:200}}>
             {
              folders.map((val:FolderType,i:any) =>{
                return <Folder alignment={i%4==0?"left-4":"right-4"} key={`${val.id}`} folderId={val.id} folderName={val.name} />
              })
             }
          </section>
          </>
        }
        {
          files.length>0&&<><Title name='Files' />
          <section  className={`grid  gap-4  ${info?"grid-cols-3":"grid-cols-4"}`} style={{minHeight:200}}>
              {
                files.map((val:any)=><Files key={val.id} fid={val.id} fkey={val.key} src={`${val.url}`} fileName={val.name} icon='text-emerald-500 fa-solid fa-image text-xl' alignment='left-4'/>)
              }
          </section>
  </>
        }
                {
          createFolder&&<Modal>
          <FolderCreate/>
        </Modal>
        }
        {
          createFile&&<FileUpload/>
        }
        {
          deleteFile&&<Modal>
            <FileDelete/>
          </Modal>
        }

    </>
  )
}
