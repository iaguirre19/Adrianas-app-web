import { useState } from "react";
import OtpIcon from "../icons/otpIcon/otpIcon";
import OtpTimer from "../timers/TimerOtp";
import "../../styles/otpModale.css";
import VerifiedPhoneIcon from "../icons/verifiedPhone/VerifiedPhone";
import Button from "../action/button/CustomButton";
import ErrorNotices from "../reusableComponents/ErrorNotices";
import PropTypes from "prop-types";

const ModalOtp = ({
  phoneNumber,
  setModalStatus,
  codeOTP,
  setIsOTPVerified,
  setStep,
}) => {
  const [errorMessages, setErrorMessages] = useState({
    text: "",
  });

  const [otpError, setOtpError] = useState(false);
  // Verified otp
  const [VerifiedOTP, setVerifiedOTP] = useState(false);
  //OTP Inputs
  // const [otp, setOTP] = useState(["", "", "", "", ""]);
  const [otp, setOTP] = useState(["2", "6", "4", "2", "3"]);
  //Manages the errrors colors.
  const [otpValidationStatus, setOtpValidationStatus] = useState(true);
  const [restartKey, setRestartKey] = useState(0);

  //OTP Inputs only numbers values
  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        newOTP[index] = value;
        return newOTP;
      });
    }
  };

  // check if there is a space
  const handleCheckOTP = () => {
    let allFilled = true;
    const otpString = otp.join("");
    const codeString = codeOTP.join("");

    otp.forEach((value) => {
      if (value.trim() === "") {
        allFilled = false;
        setOtpError(true);
        setOtpValidationStatus(false);
        setErrorMessages((prevState) => ({
          ...prevState,
          text: "One or more fields are empty. Please fill them all in.",
        }));
        return;
      }
    });

    if (!allFilled) {
      return;
    }

    if (otpString === codeString) {
      setVerifiedOTP(true);
      return true;
    } else {
      setOtpError(true);
      setOtpValidationStatus(false);
      setErrorMessages((prevState) => ({
        ...prevState,
        text: "The OTP code entered is incorrect. Please try again.",
      }));
    }
  };

  const otpStatusColor = otpValidationStatus ? "var(--pc)" : "var(--ec)";

  const resetOtpFields = () => {
    const emptyOtp = Array.from({ length: otp.length }, () => "");
    setOTP(emptyOtp);
    setOtpValidationStatus(true);
  };

  // Timer function
  const eventsErrorModal = (status) => (!status ? "active-error" : "");

  //Reset the timer when the user doesn't type the OTP code on time.
  const handleTimerEnd = () => {
    setOtpValidationStatus(false);
  };

  const handleTimeRestart = () => {
    resetOtpFields();
    setVerifiedOTP(false);
    setRestartKey(restartKey + 1);
  };

  // events provided by the cancel button.
  const handleCancelButton = (e) => {
    e.preventDefault();
    console.log("click en cancel button");
    // setModalStatus(false)
    setStep(1);
    setModalStatus(false);
  };
  const handleResendBtn = (e) => {
    e.preventDefault();
    // Here will go the function to request to the backend a new otp
    handleTimeRestart();
    setOtpError(false);
  };

  const handleVerified = (e) => {
    e.preventDefault();
    const isVerified = handleCheckOTP();
    if (isVerified) {
      setTimeout(() => {
        setIsOTPVerified(true);
        setModalStatus(false);
        setStep(3);
      }, 1500);
    }
  };

  const buttonData = {
    Cancel: {
      text: "Cancel",
      background: "white",
      textColor: "var(--pc)",
      width: "100%",
      border: "solid .1rem var(--lc)",
      className: "cancel-bt",
      onClick: handleCancelButton,
    },
    Verify: {
      text: "Veryfy",
      background: "var(--pc)",
      textColor: "white",
      width: "100%",
      type: "submit",
      border: "none",
      className: null,
      onClick: null
    },
  };

  // Showing the user number in the following way (***)***-****
  const cleanedNumber = phoneNumber.replace(/\D/g, "");
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
          {VerifiedOTP ? (
            <VerifiedPhoneIcon />
          ) : (
            <OtpIcon color={otpStatusColor} />
          )}
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
            {otpError && (
              <ErrorNotices text={errorMessages.text} status={setOtpError} />
            )}
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
            <Button buttonData={cancel} />
            <Button buttonData={verify} />
          </div>
        </form>
      </div>
      <div className="otp-back z-back"></div>
    </div>
  );
};

ModalOtp.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  setModalStatus: PropTypes.func.isRequired
}

export default ModalOtp;
