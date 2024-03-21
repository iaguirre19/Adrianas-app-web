import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Welcome back!</h2>
      <p>Please log in to your account.</p>
      <form>
        <div className="input-content">
          <div className="input-label">
            <label htmlFor="email">E - mail Address</label>
          </div>
          <div className="input-inp">
            <div className="icon-content">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
            <input
              className="input-data"
              type="email"
              name="email"
              placeholder="Please enter your email address"
              required
            />
          </div>
        </div>
        <div className="input-content">
          <div className="input-label">
            <label htmlFor="password">Password</label>
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
        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <a href="/register">Click here</a> to create one.</p>
    </div>
  );
}

export default LoginComponent;
