// import React from 'react';
import { useEffect, useState } from "react";
import adrianaslogo from "../../assets/images/adrianas-logo.svg";
import "../../styles/header-left-side.css";

const HeaderLeftSide = ({ authMode }) => {
  const [authClass, setAuthClass] = useState("");

  useEffect(() => {
    if (authMode === "signin") {
      setAuthClass("header-login-container");
    } else {
      setAuthClass("header-loginup-container");
    }
  }, [authMode]);

  const textLink = "Already have an account?";
  const linkLogin = "Login";

  return (
    <div className={authClass}>
      <div className="header-logo">
        <img src={adrianaslogo} alt="Adrianas Insurance Logo" />
      </div>
      <div className="header-logText-container">
        <p className="header-loginup-text">
          {textLink} <a>{linkLogin}</a>
        </p>
      </div>
    </div>
  );
};

export default HeaderLeftSide;

