import { toast } from "react-toastify"
import Login, { cookies } from "./pages/Login"

// copy/paste stuff 


// { style: { whiteSpace: 'nowrap' } }

export const deleteToken = () =>{
    const myToken = cookies.get("auth-token")
    
    if(myToken){
        cookies.remove("auth-token")
        toast.warning("Logged Out", { style: { whiteSpace: 'nowrap' } })
        // window.location.reload()

    }

    return null
}



