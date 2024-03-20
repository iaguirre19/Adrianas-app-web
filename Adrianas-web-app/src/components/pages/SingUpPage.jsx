import { useState } from "react";

import FileIcon from "../icons/fileIcon/FileIcon";
import MailIcon from "../icons/mailicon/MailIcon";
import PhoneIcon from "../icons/phoneicon/PhoneIcon";
import UserIcon from "../icons/userIcon/UserIcon";
import CustomButton from "../action/button/Button";
import AgreTest from "../action/agreementCheckBox/CheckBoxAgree";
import FormHeader from '../reusableComponents/FormHeader'
import ErrorNotices from "../reusableComponents/ErrorNotices";

import "../../styles/signUpStyles.css";
import "../../styles/header-title.css";
import "../../styles/checkbox.css";
import "../../styles/button.css";
import ErrorMessages from "../reusableComponents/ErrorComponent";


const validate = (isChecked) => {
  return isChecked;
};

const CreateAnAccountFormTs = ({
  dataHeader,
  setModalStatus,
  registrationData,
  setRegistrationData,
  setStep
}) => {
  // Button data
  const createAnAccountDataBtn = {
    text: "Create An Account",
    width: "100%",
    background: "--pc",
    textColor: "white",
  };


  // checkbox function
  const [isChecked, setIsChecked] = useState(true);
  const handleBoxChange = () => {
    setIsChecked(!isChecked);
  };

  // const [signUpInput, setSignUpInput] = useState({
  //   name: "Harry Styles",
  //   phoneNumber: "7772562179",
  //   email: "carrors.locos@gmail.com",
  //   policyNumber: "857976231023",
  // });
  // const [signUpInput, setSignUpInput] = useState({
  //   name: "",
  //   phoneNumber: "",
  //   email: "",
  //   policyNumber: "",
  // });

  // submit
  
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


  const [errorStatus, setErrorStatus] = useState(false)
  const [message, setMessages] = useState("") 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phoneNumber, email, policyNumber } = registrationData;

    if (
      !name.trim() ||
      !phoneNumber.trim() ||
      !email.trim() ||
      !policyNumber.trim()
    ) {
      setErrorStatus(true)
      setMessages("Some fields are missing. Please complete all required information.")
    }

    if (validate(isChecked)) {
      setModalStatus(true)
      setStep(2)
    } else {
      // ===============================================work here ================
      setErrorStatus(true);
      setMessages("Please accept the terms and conditions to proceed")
    }


    const objectForm = {
      name,
      phoneNumber,
      email,
      policyNumber
    }

    setRegistrationData(objectForm)
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
              <UserIcon />
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
              <PhoneIcon />
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
              <MailIcon />
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
              <FileIcon />
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
        <AgreTest
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleBoxChange={handleBoxChange}
        />
        <div className="signup-error-messages">
          {errorStatus && <ErrorNotices text={message} status={setErrorStatus} />}
        </div>

        <CustomButton
          text={createAnAccountDataBtn.text}
          width={createAnAccountDataBtn.width}
          background={createAnAccountDataBtn.background}
          textColor={createAnAccountDataBtn.textColor}
          type="submit"
          border="none"
        />
      </form>
    </div>
  );
};

export default CreateAnAccountFormTs;
