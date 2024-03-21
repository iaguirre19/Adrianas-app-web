import { useEffect, useState } from "react";
import "../../styles/inputStyles.css";
import '../../styles/passwordFormStyle.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faEye,
  faEyeSlash,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../action/button/CustomButton";
import ErrorNotices from "../reusableComponents/ErrorNotices";
import FormHeader from "../reusableComponents/FormHeader";
import PropTypes from "prop-types";

const PasswordForm = ({ 
  dataHeader,
  setStep, 
  setCurrentStepBar 
}) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  useEffect(() => {
    setCurrentStepBar(2)
  }, [])

  // Password validation
  const [isTyping, setIsTyping] = useState(false);

  const validatePassword = () => {
    const { password } = formData;
    const validations = [];

    validations.push(password.length >= 8);
    validations.push(/[A-Z]/.test(password));
    validations.push(/[a-z]/.test(password));
    validations.push(/[0-9]/.test(password));
    validations.push(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password));

    return validations;
  };
  const passwordValidations = validatePassword();

  // Password code
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setFormData({ ...formData, [name]: value });
      setIsTyping(true);
    } else if (name === "repeatPassword") {
      setFormData({ ...formData, [name]: value });
    }else if(name === "email"){
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [statusError, setStatusError] = useState(false);
  const [textError, setTextError] = useState("");
  const [errorMessages, setErrorMessages] = useState([
    {
      mismatchPassword: {
        text: "The password doesn't match, please try again.",
      },
      missingFields: {
        text: "Please fill out all the inputs.",
      },
    },
  ]);

  const [
    {
      mismatchPassword: { text: mismatchPasswordErrorMessage },
      missingFields: { text: missingFieldsErrorMessages },
    },
  ] = errorMessages;


  const handleCheck = () => {

    let validationPassed = true

    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );


    if(isAnyFieldEmpty){
      setStatusError(true)
      setTextError(missingFieldsErrorMessages);
      return validationPassed = false
    }

    
    if(formData.password !== formData.repeatPassword){
      setStatusError(true)
      setTextError(mismatchPasswordErrorMessage);
      return validationPassed = false
    }


    return validationPassed
  }

  // Submit code
  const handleOnClick = (e) => {
    e.preventDefault();
    (handleCheck())
    if(handleCheck()){
      setStep(4);
    }
  };


  // Styles and properties compnents
  const passwordDataBtn = {
    text: "Create An Account",
    width: "100%",
    background: "--pc",
    textColor: "white",
    type: "submit",
    border: "none",
    className: "btn-password-form",
    onClick: handleOnClick,
  };

  return (
    <div className="password-container">
      <FormHeader title={dataHeader.title} subTitle={dataHeader.subTitle} />
      <form className="password-form">
        <div className="input-container">
          <div className="input-content">
            <div className="input-label">
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-inp">
              <div className="icon-content">
                <FontAwesomeIcon className="icon-styles" icon={faEnvelope} />
              </div>
              <input
                className="input-data"
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
          <div className="input-content">
            <div className="input-label">
              <label htmlFor="repeatPassword">Repeat Password</label>
            </div>
            <div className="input-inp">
              <div className="icon-content">
                <FontAwesomeIcon className="icon-styles" icon={faKey} />
              </div>
              <input
                className="input-data"
                type={showPassword ? "text" : "password"}
                name="repeatPassword"
                placeholder="Repeat your password"
                value={formData.repeatPassword}
                onChange={handleChange}
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
        <div className="validation-conatiner">
          <div className="password-strength">
            <span
              style={{
                color: isTyping
                  ? passwordValidations[0]
                  ? "var(--vc)"
                  : "var(--ec)"
                  : "#ccc",
              }}
            >
              {isTyping ? (
                passwordValidations[0] ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )
              ) : (
                "-"
              )}{" "}
              Password should have at least 8 characters
            </span>
            <span
              style={{
                color: isTyping
                  ? passwordValidations[1]
                  ? "var(--vc)"
                  : "var(--ec)"
                  : "#ccc",
              }}
            >
              {isTyping ? (passwordValidations[1] ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )) : "-"} Password
              should have at least one uppercase letter
            </span>
            <span
              style={{color: isTyping ? passwordValidations[2] ? "var(--vc)" : "var(--ec)" : "#ccc",}}>
              {isTyping ? (passwordValidations[2] ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )) : "-"} Password
              should have at least one lowercase letter
            </span>
            <span
              style={{
                color: isTyping
                  ? passwordValidations[3]
                    ? "var(--vc)"
                    : "var(--ec)"
                  : "#ccc",
              }}
            >
              {isTyping ? (passwordValidations[3] ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )) : "-"} Password
              should have at least one number
            </span>
            <span
              style={{
                color: isTyping
                  ? passwordValidations[4]
                  ? "var(--vc)"
                  : "var(--ec)"
                  : "#ccc",
              }}
            >
              {isTyping ? (passwordValidations[4] ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )) : "-"} Password
              should have at least one special character
            </span>
            <div className="error-container">
              {statusError && (
                <ErrorNotices text={textError} status={setStatusError} />
              )}
            </div>
          </div>
        </div>
        <div className="btn-container">
          <Button buttonData={passwordDataBtn} />
        </div>
      </form>
    </div>
  );
};

PasswordForm.propTypes = {
  dataHeader: PropTypes.object.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default PasswordForm;
