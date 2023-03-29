import { toast } from "react-toastify"



export const deleteToken = () =>{
    cookies.remove("auth-token")
    toast.success("Token Deleted")
    return null
}