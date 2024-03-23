import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../action/button/CustomButton";
import '..//../styles/forgotPasswordStyles.css'

const ForgotPassword = () => {
  const [resendPasswordData, setResendPasswordData] = useState({
    userName: "",
  });

  const buttonData = {
    text: "Get Link",
    width: "100%",
    background: "--pc",
    textColor: "white",
    type: "submit",
    border: "none",
    className: "btn-forgot-password",
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(resendPasswordData.userName);

    setResendPasswordData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="forgotPassword-container">
      <div className="forgotPassword-content">
        <div className="forgot-header-text">
          <h1>Forgot Password</h1>
          <p>
            No worries, Enter your account email addresss and we will share a
            reset link
          </p>
        </div>
        <form className="forgot-form">
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
                  value={resendPasswordData.userName}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="buttom-content">
              <Button buttonData={buttonData} />
              <a className="return-login">Return to login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
