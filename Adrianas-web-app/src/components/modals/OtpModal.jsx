import { useState} from "react";
import OtpIcon from "../icons/otpIcon/otpIcon";
import OtpTimer from "../timers/TimerOtp";
import "../../styles/otpModale.css";
import CustomButton from "../action/button/Button";
import VerifiedPhoneIcon from "../icons/verifiedPhone/VerifiedPhone";
import PropTypes from "prop-types";

const ModalOtp = ({phoneNumberCa, setShowModal }) => {

  const [approvedOTP, setApprovedOTP] =useState(false)

  const handleButtonState = (approved) => {
    if (!approved) {
      return (
        <>
          <CustomButton
            text="Cancel"
            background="white"
            textColor="var(--pc)"
            width="100%"
            border="solid .1rem var(--lc)"
            onClick={handleCancelButton}
            className="cancel-bt"
          />
          <CustomButton
            text="Veryfy"
            background="var(--pc)"
            textColor="white"
            width="100%"
            type="submit"
            className={verify.className}
          />
        </>
      );
    } else {
      console.log("La condición no se cumple, no se renderizan los botones");
      return null;
    }
  };

  // Verified otp
  const [VerifiedOTP, setVerifiedOTP] = useState(false)


  //This part of the code is about the otp input
  const [otp, setOTP] = useState(["", "", "", "", ""]);

  //This function ensures that the value of each input will be only numbers
  const handleChange = (index, value) => {
    const newOTP = [...otp];
    if (/^\d*$/.test(value)) {
      newOTP[index] = value;
      setOTP(newOTP);
    }
  };

  //This part manages the state of the modal, if it is true, shows the colors in blue(primary color), but if it isn't then, It shows the colors in red
  const [otpValidationStatus, setOtpValidationStatus] = useState(true);
  const otpStatusColor = otpValidationStatus ? "var(--pc)" : "var(--ec)";


  const resetOtpFields = () => {
    const emptyOtp = Array.from({ length: otp.length }, () => "");
    setOTP(emptyOtp);
    setOtpValidationStatus(true);
  };
  
  // Timer
  const [restartKey, setRestartKey] = useState(0)
  const eventsErrorModal = (status) => (!status ? "active-error" : "");
  
  //Reset the timer when the user doesn't type the OTP code on time.
  const handleTimerEnd = () => {
    setOtpValidationStatus(false);
  };

  const handleTimeRestart = () => {
    resetOtpFields();
    setVerifiedOTP(false)
    setRestartKey(restartKey + 1);
  };


  const handleCheckOTP = () => {
    const filledValues = [];
    let allFilled = true;

    otp.forEach((value) => {
      if(value.trim() !== ""){
        filledValues.push(value)
      }else{
        allFilled = false;
      }; 
    });

    if(allFilled){
      setVerifiedOTP(true)
    }else{
      console.log('no todos estan llenos')
    }

  }

  const handleVerified = (e) => {
    e.preventDefault()
    handleCheckOTP()
  };

  // events provided by the cancel button.
  const handleCancelButton = () => {
    console.log('click en cancel button')

    setShowModal(false)
  };
  const handleResendBtn = (e) => {
    e.preventDefault();
    // Here will go the function to request to the backend a new otp
    handleTimeRestart();
  };

  const buttonData = {
    Cancel: {
      text: "Cancel",
      background: "white",
      textColor: "var(--pc)",
      width: "100%",
      border: "solid .1rem var(--lc)",
      className: "cancel-bt"
    },
    Verify: {
      text: "Veryfy",
      background: "var(--pc)",
      textColor: "white",
      width: "100%",
      type: "submit",
      border: "none",
      className: null
    },
  };


  // Showing the user number in the following way (***)***-****
  const cleanedNumber = phoneNumberCa.replace(/\D/g, "");
  const formattedNumber = `(${cleanedNumber.slice(0, 3)})${cleanedNumber.slice(
    3,
    6
  )}-${cleanedNumber.slice(6)}`;

  const cancel = buttonData.Cancel;
  const verify = buttonData.Verify;

  return (
    <div className="otp-modale-container">
      <div className="otp-content z-modale">
        <div className="otp-header">
          <h2 className="otp-title">Enter your code</h2>
          <p className="otp-subTitle">
            Please type verification code sent to{" "}
            <span className="otp-phone">{formattedNumber}</span>
          </p>
        </div>
        <div className="otp-icon">
          {VerifiedOTP ? <VerifiedPhoneIcon /> : <OtpIcon color={otpStatusColor} /> }
        </div>
        <form className="otp-container-form" onSubmit={handleVerified}>
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
              <button
                type="text"
                className={eventsErrorModal(otpValidationStatus)}
                onClick={handleResendBtn}
              >
                Resend code
              </button>
            </div>
            <div className="otp-counter">
              <OtpTimer
                key={restartKey}
                initialSeconds={120}
                onTimerEnd={handleTimerEnd}

                resetModal={resetOtpFields}
              />
            </div>
          </div>
          <div className="otp-btns">
            {handleButtonState(approvedOTP)}
          </div>
        </form>
      </div>
      <div className="otp-back z-back"></div>
    </div>
  );
};

ModalOtp.propTypes = {
  phoneNumberCa: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default ModalOtp;
