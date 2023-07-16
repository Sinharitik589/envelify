import { createContext, ReactNode, useContext, useState } from "react";
import { FolderType } from "../utils/types";

type storeProps = {
    info:Boolean,
    setInfo?:Function,
    dark:Boolean,
    setDark?:Function,
    header:String,
    setHeader?:Function,
    authenticated:String,
    setAuthenticated?:Function,
    setCreateFolder:Function,
    createFolder:Boolean,
    setCreateFile:Function,
    createFile:Boolean,
    folders:Array<FolderType>,
    setFolders:Function
}

type providerProps = {
    children:ReactNode
}

const funcD = () => {}

const StoreContext = createContext<any>({info:false,dark:false,header:"",authenticated:"",setCreateFile:funcD,createFile:false,setCreateFolder:funcD,createFolder:false,setFolders:funcD,folders:[]});

export const StoreProvider = ({children}:providerProps) => {

    const [info,setInfo] = useState(false);
    const [authenticated,setAuthenticated] = useState("");
    const [dark,setDark] =useState(false);
    const [header,setHeader] = useState("Home");
    const [createFolder,setCreateFolder] = useState(false);
    const [createFile,setCreateFile] = useState(false);
    const [file,setFile] = useState(null);
    const [files,setFiles] = useState([]);
    const [folders,setFolders] = useState([]);
    const [folderSelected,setFolderSelected] = useState("");
    const [deleteFile,setDeleteFile] = useState(null);
    const [filePercent,setFilePercent] = useState(0);
    const [cancelRequest,setCancelRequest] = useState(null);
    return <StoreContext.Provider value={{cancelRequest,setCancelRequest,filePercent,setFilePercent,info,setInfo,dark,setDark,header,setHeader,authenticated,setAuthenticated,createFile,setCreateFile,createFolder,setCreateFolder,setFolders,folders,setFolderSelected,folderSelected,setFile,file,files,setFiles,deleteFile,setDeleteFile}}>
        {children}
    </StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext);
