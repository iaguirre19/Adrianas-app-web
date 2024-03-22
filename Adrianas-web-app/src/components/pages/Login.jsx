import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../action/button/CustomButton";
import ErrorNotices from "../reusableComponents/ErrorNotices";

import "../../styles/loginStyles.css";
import {
  faEnvelope,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const LoginComponent = ({setAuthMode}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [userCredentials, setUserCredentials] = useState({
    userName: '',
    password: ''
  });
  const [errorMessages, setErrorMessages] = useState("")
  const [authStatusError, setAuthStatusError] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChangelogin = (e) => {
    const {name, value} = e.target
    setUserCredentials((prev) => ({...prev, [name]: value }))
 }

 const handleCheckValues = () => {

  const {userName, password} = userCredentials;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if(!emailPattern.test(userCredentials.userName)){
    setErrorMessages("Please enter a valid email address.")
    setAuthStatusError(true)
    return false
  }

  if(userCredentials.password.length < 8) {
    setErrorMessages('Password must be at leats 8 characters long.');
    setAuthStatusError(true)
    return false
  }

  if(userName === "admin@mail.com" && password === "password"){
    return true;
  }else{
    setErrorMessages("Incorrect username or password. Please try again.")
    setAuthStatusError(true)
    return false
  }


  // Below write the code for error validations from backend

 }

 const handleCreateAccount = (e) => {
  e.preventDefault();
  setAuthMode("signup")
 } 

 const handleSubmit = (e) => {
    e.preventDefault();
    const validationPassed = handleCheckValues()
    
    if(validationPassed){
      const userData = {
        userName: userCredentials.userName,
        password: userCredentials.password
      }


    }
  
 }

  const loginDataBtn = {
    text: "Login",
    width: "100%",
    background: "--pc",
    textColor: "white",
    type: "submit",
    border: "none",
    className: "btn-login",
  };

  return (
    <div className="login-container">
      <div className="title-login">
        <h2>Welcome back!</h2>
        <p>Enter your email and password to access your account.</p>
      </div>
      <form className="login-form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-content">
            <div className="input-label">
              <label>E - mail Address</label>
            </div>
            <div className="input-inp">
              <div className="icon-content">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </div>
              <input
                className="input-data"
                type="email"
                name="userName"
                placeholder="Please enter your email address"
                value={userCredentials.userName}
                onChange={handleOnChangelogin}
                required
              />
            </div>
          </div>
          <div className="input-content">
            <div className="input-label">
              <label>Password</label>
            </div>
            <div className="input-inp">
              <div className="icon-content">
                <FontAwesomeIcon className="icon-styles" icon={faKey} />
              </div>
              <input
                className="input-data"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={userCredentials.password}
                onChange={handleOnChangelogin}
                required
              />
              <div className="check-icon-container">
                <FontAwesomeIcon
                  className="icon-styles show-password"
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={handleShowPassword}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="remember-forgot-content">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a className="forgot-password" href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="error-container-login">
          {authStatusError && (<ErrorNotices text={errorMessages} status={setAuthStatusError} />)}
        </div>
        <Button buttonData={loginDataBtn} /> 
      </form>
      <p className="create-account-container">
        Don't have an account? <a href="/register" onClick={handleCreateAccount}>Click here</a> to create one.
      </p>
    </div>
  );
};

export default LoginComponent;
