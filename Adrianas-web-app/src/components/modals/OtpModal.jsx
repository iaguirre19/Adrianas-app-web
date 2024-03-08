import { useState } from "react";
import OtpIcon from "../icons/otpIcon/otpIcon";
import OtpTimer from "../timers/TimerOtp";
import "../../styles/otpModale.css";
import CustomButton from "../action/button/Button";

const ModalOtp = ({ showModal, setModal }) => {
  console.log(showModal);
  
  const handleCancelButton = (e) => {
    e.preventDefault();
    console.log("Thiste click en el cancel")
    if(showModal){
        setModal(false)
    }
  }
  
  
  
  const phoneNumber = "(909)345-3475";

  const [otp, setOTP] = useState(["", "", "", "", ""]);

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    if (/^\d*$/.test(value)) {
      newOTP[index] = value;
      setOTP(newOTP);
    }
  };
  const handleTimerEnd = () => {
    console.log("El contador ha llegado a 0");
  };

  const buttonData = {
    Cancel: {
      text: "Cancel",
      background: "white",
      textColor: "var(--pc)",
      width: "100%",
      border: "solid .1rem var(--lc)",
    },
    Verify: {
      text: "Veryfy",
      background: "var(--pc)",
      textColor: "white",
      width: "100%",
      type: "submit",
      border: "none",
    },
  };

  const cancel = buttonData.Cancel;
  const verify = buttonData.Verify;

  return (
    <div className="otp-modale-container">
      <div className="otp-content z-modale">
        <div className="otp-header">
          <h2 className="otp-title">Enter your code</h2>
          <p className="otp-subTitle">
            Please type verification code sent to{" "}
            <span className="otp-phone">{phoneNumber}</span>
          </p>
        </div>
        <div className="otp-icon">
          <OtpIcon />
        </div>
        <form className="otp-container-form">
          <div className="otp-input-content">
            {otp.map((digit, index) => (
              <div key={index} className="otp-code-inp">
                <input
                  type="text"
                  value={digit}
                  maxLength="1"
                  onInput={(e) => handleChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <div className="otp-resend-code">
            <div className="gtp-code">
              <span>Didn't get it? </span>
              <button type="text">Resend code</button>
            </div>
            <div className="otp-counter">
              <OtpTimer initialSeconds={120} onTimerEnd={handleTimerEnd} />
            </div>
          </div>
          <div className="otp-btns">
            <CustomButton
              text={cancel.text}
              background={cancel.background}
              textColor={cancel.textColor}
              width={cancel.width}
              type={cancel.type}
              border={cancel.border}
              onClick={handleCancelButton}
            />
            <CustomButton
              text={verify.text}
              background={verify.background}
              textColor={verify.textColor}
              width={verify.width}
              type={verify.type}
            />
          </div>
        </form>
      </div>
      <div className="otp-back z-back"></div>
    </div>
  );
};

export default ModalOtp;
