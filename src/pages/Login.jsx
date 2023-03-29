import React, { useRef } from "react";
import Cookies from "universal-cookie"


// styles
import "./Login.css";
import logo from "../assets/logo.png"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase-config";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";
import Home from "../components/Home";

export const loginLoader = () => {
  return "Login loading";
};


// setup 
export const cookies = new Cookies()

const Login = () => {

   
    const linkRef = useRef()

    const signInwithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider)
        cookies.set("auth-token", result.user.refreshToken)
        toast.success(`Welcome ${result.user.displayName.split(" ")[0]}`)
        linkRef.current.click()
    } catch(err) {
        console.log(err)
    }
    
    }

    if(cookies.get("auth-token")){
        return (
            <Home />
        )
    }


  return (
    <div className="login-page">
        <img className="login-logo" src={logo} alt="" />
      <div className="body">
        <h2>Please Sign-In.</h2>
        <button id="g" onClick={signInwithGoogle}>
          <Link className="fab fa-google-plus-g">
            Sign in with Google
          </Link>
          <Link  ref={linkRef} to="/home" hidden className="fab fa-google-plus-g">
            Sign in with Google
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;

