import React, { useEffect, useState } from "react";
import "../../styles/inputStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormHeader from "../reusableComponents/FormHeader";
import CustomButton from "../action/button/Button";
import ErrorNotices from "../reusableComponents/ErrorNotices";

const PasswordForm = ({ dataHeader }) => {
  const dataPasswordHeader = dataHeader[1];

  const { title, subTitle } = dataPasswordHeader;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [storedData, setStoredData] = useState(null);
  const [statusError, setStatusError] = useState(false);
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
  const [textError, setTextError] = useState("");

  const [
    {
      mismatchPassword: { text: mismatchPasswordErrorMessage },
      missingFields: { text: missingFieldsErrorMessages },
    },
  ] = errorMessages;





  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "repeatPassword") {
      setRepeatPassword(value);
    }

    if (name === "password") {
      setIsTyping(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );

    if (formData.password !== formData.repeatPassword) {
      setStatusError(true);
      setTextError(mismatchPasswordErrorMessage);
      return;
    } else if (isAnyFieldEmpty) {
      setStatusError(true);
      setTextError(missingFieldsErrorMessages);
    } else {
      const userPassData = { ...formData };
      setStoredData(userPassData);
    }

  };

  // Validate the password

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

  const passwordDataBtn = {
    text: "Create An Account",
    width: "100%",
    background: "--pc",
    textColor: "white",
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-container">
      <FormHeader title={title} subTitle={subTitle} />
      <form className="password-form" onSubmit={handleSubmit}>
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
                type="email"
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
                value={repeatPassword}
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
                    ? "green"
                    : "red"
                  : "#ccc",
              }}
            >
              {isTyping ? (passwordValidations[0] ? "✓" : "✗") : "-"} Password
              should have at least 8 characters
            </span>
            <span
              style={{
                color: isTyping
                  ? passwordValidations[1]
                    ? "green"
                    : "red"
                  : "#ccc",
              }}
            >
              {isTyping ? (passwordValidations[1] ? "✓" : "✗") : "-"} Password
              should have at least one uppercase letter
            </span>
            <span
              style={{
                color: isTyping
                  ? passwordValidations[2]
                    ? "green"
                    : "red"
                  : "#ccc",
              }}
            >
              {isTyping ? (passwordValidations[2] ? "✓" : "✗") : "-"} Password
              should have at least one lowercase letter
            </span>
            <span
              style={{
                color: isTyping
                  ? passwordValidations[3]
                    ? "green"
                    : "red"
                  : "#ccc",
              }}
            >
              {isTyping ? (passwordValidations[3] ? "✓" : "✗") : "-"} Password
              should have at least one number
            </span>
            <span
              style={{
                color: isTyping
                  ? passwordValidations[4]
                    ? "green"
                    : "red"
                  : "#ccc",
              }}
            >
              {isTyping ? (passwordValidations[4] ? "✓" : "✗") : "-"} Password
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
          <CustomButton
            text={passwordDataBtn.text}
            width={passwordDataBtn.width}
            background={passwordDataBtn.background}
            textColor={passwordDataBtn.textColor}
            type="submit"
            border="none"
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
