import React, { useState } from "react";
import "../../styles/inputStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import FormHeader from "../reusableComponents/FormHeader";
import CustomButton from "../action/button/Button";

const PasswordForm = ({ dataHeader }) => {
  const dataPasswordHeader = dataHeader[1];
  const { title, subTitle } = dataPasswordHeader;
  console.log(title);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [validationEye, setValidationEye] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    console.log(validations);
    return validations;
  };

  const handleShowPassword = (e) => {
    console.log(validationEye)
    setValidationEye(!validationEye)
    console.log(validationEye)
  };
  const passwordValidations = validatePassword();

  const passwordDataBtn = {
    text: "Create An Account",
    width: "100%",
    background: "--pc",
    textColor: "white",
  };
  return (
    <div className="password-container">
      <FormHeader title={title} subTitle={subTitle} />
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
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
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
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="check-icon-container">
                
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
                type="password"
                name="repeatPassword"
                placeholder="Repeat your password"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
              />
              <div className="check-icon-container">
                <FontAwesomeIcon
                  className="icon-styles show-password"
                  icon={faEyeSlash}
                  onClick={handleShowPassword}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="validation-conatiner">
          <div className="password-strength">
            <span style={{ color: passwordValidations[0] ? "green" : "red" }}>
              {passwordValidations[0] ? "✓" : "✗"} Password should have at least
              8 characters
            </span>
            <span style={{ color: passwordValidations[1] ? "green" : "red" }}>
              {passwordValidations[1] ? "✓" : "✗"} Password should have at least
              one uppercase letter
            </span>
            <span style={{ color: passwordValidations[2] ? "green" : "red" }}>
              {passwordValidations[2] ? "✓" : "✗"} Password should have at least
              one lowercase letter
            </span>
            <span style={{ color: passwordValidations[3] ? "green" : "red" }}>
              {passwordValidations[3] ? "✓" : "✗"} Password should have at least
              one number
            </span>
            <span style={{ color: passwordValidations[4] ? "green" : "red" }}>
              {passwordValidations[4] ? "✓" : "✗"} Password should have at least
              one special character
            </span>
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
