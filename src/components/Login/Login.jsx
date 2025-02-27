import React, {Fragment, useRef} from 'react';
import {Link,NavLink,BrowserRouter,HashRouter} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty} from "../../helper/FormHelper";
import {LoginRequest} from '../../APIRequest/APIRequest.js'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";



const Login = () => {
    let passRef,emailRef=useRef();

    const SubmitLogin=()=>{
        let email=emailRef.value;
        let pass=passRef.value;
        if(IsEmail(email)){
            ErrorToast("Invalid Email Address")
        }
        else if(IsEmpty(pass)){
            ErrorToast("Password Required")
        }
        else{
            LoginRequest(email,pass).then((result)=>{
                if(result===true){
                    window.location.href="/"
                }
            })

    
        }
    }

    const handleLogin = () => {
        window.open("http://localhost:8080/api/v1/auth/google", "_self");
    };

    const clientId = '794523773404-ocjc5qvol99sasfruub3mt5cgvgec5cv.apps.googleusercontent.com'

    return (
        <Fragment>
            <GoogleOAuthProvider clientId={clientId}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-6 center-screen">
                            <div className="card w-90  p-4">
                                <div className="card-body">
                                    <h4>SIGN IN</h4>
                                    <br/>
                                    <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    <br/>
                                    <input ref={(input)=>passRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    <br/>

                                    <button onClick={handleLogin} className='btn btn-success w-100'>Login with google</button>

                                    <button onClick={SubmitLogin} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                    <hr/>
                                    <div className="float-end mt-3">

                                        <span>
                                            <Link className="text-center ms-3 h6 animated fadeInUp" to="/Registration">Sign Up </Link>
                                            <span className="ms-1">|</span>
                                            <Link className="text-center ms-3 h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
                                        </span>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GoogleOAuthProvider>
        </Fragment>
    );
};
export default Login;