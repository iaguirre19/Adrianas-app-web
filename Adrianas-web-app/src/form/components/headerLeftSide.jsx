// import React from 'react';
import adrianaslogo from '../../assets/images/adrianas-logo.svg'
import '../../styles/header-left-side.css'

const HeaderLeftSide = () => {
    const textLink =  "Already have an account?"
    const linkLogin = "Login"

    return (
        <div className='header-container'>
            <div className='header-logo'>
                <img src={adrianaslogo} alt="Adrianas Insurance Logo" />
            </div>
            <div className='header-login-text'>
                <p>{textLink} <a>{linkLogin}</a></p>
            </div>
        </div>
    );
};


export default HeaderLeftSide;
