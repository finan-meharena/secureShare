import React, { useRef } from "react";
import Cookies from "universal-cookie";
import { FaBeer, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// styles
import "./Login.css";
import logo from "../assets/logo.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Home from "../components/Home";

export const loginLoader = () => {
  return "Login loading";
};

// setup
export const cookies = new Cookies();

const Login = () => {

  const navigate = useNavigate()

  if (cookies.get("auth-token")) {
    return <Home />;
  }

  const linkRef = useRef();

  const signInwithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      toast.success(`Welcome ${result.user.displayName.split(" ")[0]}`, { style: { whiteSpace: 'nowrap' } })
      navigate("/home")
      
    } catch (err) {
      console.log(err);
    }

    return;
  };

  return (
    <div className="login-page">
      <img className="login-logo" src={logo} alt="" />
      <div className="body">
        <h2>Please Sign-In.</h2>
        <div className="login-options">
          <button className="google option" onClick={signInwithGoogle}>
            <Link>
               <span className="option-icon"> <FcGoogle/> </span> Sign in with Google
              </Link>
            <Link
              ref={linkRef}
              to="/home"
              hidden
            ></Link>
          </button>

          <button className="facebook option">
            <Link>
            <span className="option-icon"> <FaFacebook/> </span> Sign in with Facebook
            </Link>
          </button>

          <button className="github option">
            <Link>
            <span className="option-icon"> <FaGithub/> </span> Sign in with GitHub
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
