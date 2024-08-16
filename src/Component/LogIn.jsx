import React from "react";
import "./style.css"
import { FcGoogle } from "react-icons/fc";

function LogIn(){
    return<>
    <div className="center">
    <div className="one">
      <h6>Create a new account</h6>
      <a href="/Google/ONEBOX">
      <button className="btn1"><span><FcGoogle/></span>Sign Up with Google</button>
      </a>
      <br />
      <button className="btn2">Create an Account</button>
      <p>already have an account?<span> Sign in</span></p>
    </div>
    </div>
    </>
}

export default LogIn;