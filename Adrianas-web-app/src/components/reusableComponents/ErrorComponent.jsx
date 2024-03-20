import { useEffect } from "react";
import PropTypes from "prop-types";

const ErrorMessages = ({text, setOtpError}) => {

  useEffect(() => {
    setTimeout(() => {
      setOtpError(false)
    }, 4000)
  },[])


    return (
    <div className="error-otp active-err">
      <span>{text}</span>
    </div>
  );

};

ErrorMessages.propTypes = {
  text: PropTypes.string.isRequired,
  setOtpError: PropTypes.func.isRequired
}

export default ErrorMessages