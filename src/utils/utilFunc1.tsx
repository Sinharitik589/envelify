import jwt from "jsonwebtoken";
export const getFileIcon = (t:string):string => {

    switch(t){
        case "folder":
            return "fa-sharp fa-solid fa-folder text-base text-emerald-300";
        default:
            return "fa-sharp fa-solid fa-file-pdf text-base text-red-300"
    }

}

export const verifyJwt = (token:any) => {
    return ""
}