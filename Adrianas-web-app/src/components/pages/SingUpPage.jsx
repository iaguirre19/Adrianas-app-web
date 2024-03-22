import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faPhone,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

import CheckBoxAgree from "../action/agreementCheckBox/CheckBoxAgree";
import FormHeader from "../reusableComponents/FormHeader";
import ErrorNotices from "../reusableComponents/ErrorNotices";
import Button from "../action/button/CustomButton";

import "../../styles/signUpStyles.css";
import "../../styles/header-title.css";
import "../../styles/checkbox.css";
import "../../styles/button.css";

const validate = (isChecked) => {
  return isChecked;
};

const CreateAnAccountFormTs = ({
  dataHeader,
  setModalStatus,
  registrationData,
  setRegistrationData,
}) => {
  // Button Style

  const passwordDataBtn = {
    text: "Create An Account",
    width: "100%",
    background: "--pc",
    textColor: "white",
    type: "submit",
    border: "none",
    className: "btn-password-form",
  };

  // checkbox function
  const [isChecked, setIsChecked] = useState(true);
  const handleBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (event) => {
    // This code stores in a variable the type of input that we are currently typing. Taking in the first variable the name of the input.Then, In the second one, It is storing the value of this input.
    const { name, value } = event.target;

    //Then storage the value in a formattedValue let
    let formattedValue = value;

    if (name === "policyNumber") {
      formattedValue = formatPolicyNumber(formattedValue);
    } else if (name === "phoneNumber") {
      formattedValue = formatPhoneNumber(formattedValue);
    }

    setRegistrationData((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const [errorStatus, setErrorStatus] = useState(false);
  const [message, setMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phoneNumber, email, policyNumber } = registrationData;

    if (
      !name.trim() ||
      !phoneNumber.trim() ||
      !email.trim() ||
      !policyNumber.trim()
    ) {
      setErrorStatus(true);
      setMessages(
        "Some fields are missing. Please complete all required information."
      );
    }

    if (validate(isChecked)) {
      setModalStatus(true);
    } else {
      setErrorStatus(true);
      setMessages("Please accept the terms and conditions to proceed");
    }

    const objectForm = {
      name,
      phoneNumber,
      email,
      policyNumber,
    };

    setRegistrationData(objectForm);
  };

  // Inputs Formats
  const formatPolicyNumber = (value) => {
    return value.slice(0, 12);
  };

  const formatPhoneNumber = (value) => {
    return value.slice(0, 10);
  };

  return (
    <div className="form-container">
      <FormHeader title={dataHeader.title} subTitle={dataHeader.subTitle} />
      <form className="form-input-container" onSubmit={handleSubmit}>
        <div className="input-content">
          <div className="input-label">
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="input-inp">
            <div className="icon-content">
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <input
              className="input-data"
              type="text"
              name="name"
              placeholder="Please enter your full name"
              value={registrationData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-content">
          <div className="input-label">
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="input-inp">
            <div className="icon-content">
              <FontAwesomeIcon icon={faPhone} className="icon" />
            </div>
            <input
              className="input-data"
              type="tel"
              name="phoneNumber"
              placeholder="Please enter your phone number"
              value={registrationData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
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
              value={registrationData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-content">
          <div className="input-label">
            <label htmlFor="policy">Policy Number</label>
          </div>
          <div className="input-inp">
            <div className="icon-content">
              <FontAwesomeIcon icon={faFile} className="icon" />
            </div>
            <input
              className="input-data"
              type="text"
              name="policyNumber"
              placeholder="0000 - 5766 - 43565"
              maxLength={12}
              value={registrationData.policyNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <CheckBoxAgree
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleBoxChange={handleBoxChange}
        />
        <div className="signup-error-messages">
          {errorStatus && (
            <ErrorNotices text={message} status={setErrorStatus} />
          )}
        </div>
        <Button buttonData={passwordDataBtn} />
      </form>
    </div>
  );
};

export default CreateAnAccountFormTs;
