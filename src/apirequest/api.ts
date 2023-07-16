import axios from 'axios'
let backend_url ="http://localhost:5050" 


export const fetchFolders = (path:String):Promise<any> => {
    return new Promise(async(resolve,reject) => {
        try{
            const res = await axios.get(`${backend_url}/folder/folders?path=${path}`,{
                headers:{token:localStorage.getItem("token")}
            });
            resolve(res.data);
        }
        catch(e){
            reject(e);
            console.log(e);
        }
    })
}

export const fetchFiles = (path:String):Promise<any> => {
    return new Promise(async(resolve,reject) => {
        try{
            const res = await axios.get(`${backend_url}/file/files?path=${path}`,{
                headers:{token:localStorage.getItem("token")}
            });
            resolve(res.data);
        }
        catch(e){
            reject(e);
            console.log(e);
        }
    })
}

export const createFolder = (path:String,name:String):Promise<any> => {
    return new Promise(async(resolve,reject) =>{
        try{
            const res = await axios.post(`${backend_url}/folder/create`,{name,path},{
                headers:{token:localStorage.getItem("token")},
            })
            resolve(res.data)
        }
        catch(e){
            reject(e);
            console.log(e);
        }
    })
}

export const getSigned = (type:String,key:String):Promise<any> => {
    return new Promise(async(resolve,reject) => {
        try{
            const res = await axios.post(`${backend_url}/file/upload`,{name:key,type},{
                headers:{token:localStorage.getItem("token")},
            })
            resolve(res.data)
        } 
        catch(e){
            reject(e);
        }
    })
}

export const createFile = (path:String,name:String,url:String):Promise<any> => {
    return new Promise(async(resolve,reject) =>{
        try{
            const res = await axios.post(`${backend_url}/file/save`,{name,path,url},{
                headers:{token:localStorage.getItem("token")},
            })
            resolve(res.data);
        }
        catch(e){
            reject(e);
            console.log(e);
        }
    })
}

export const deleteFileFunc = (key:any,id:String):Promise<any> => {
    return new Promise(async(resolve,reject) =>{
        try{
            const res = await axios.post(`${backend_url}/file/delete`,{key,id},{headers:{token:localStorage.getItem("token")}})
            resolve(res.data);
        }
        catch(e){
            reject(e);
            console.log(e);
        }
    })
}

export const createBucket =(token:any):Promise<any> =>{
    return new Promise(async(resolve,reject) =>{
        try{
            const res = await axios.post(`${backend_url}/bucket/create`,{
                headers:{token:token},
            })
            resolve(res.data);
        }
        catch(e){
            reject(e);
            console.log(e);
        }
    })
}