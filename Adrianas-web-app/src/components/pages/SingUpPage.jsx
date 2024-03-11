import { useState } from "react";

import FileIcon from "../icons/fileIcon/FileIcon";
import MailIcon from "../icons/mailicon/MailIcon";
import PhoneIcon from "../icons/phoneicon/PhoneIcon";
import UserIcon from "../icons/userIcon/UserIcon";
import CustomButton from "../action/button/Button";
import StatusBar from "../reusableComponents/progressBar";
import AgreTest from "../action/agreementCheckBox/CheckBoxAgree";
import "../../styles/signUpStyles.css";
import "../../styles/header-title.css";
import "../../styles/checkbox.css";
import "../../styles/button.css";

const FormHeader = ({ title, subTitle }) => {
  return (
    <div className="header-title-container">
      <h1 className="title-header">{title}</h1>
      <p className="subtitle-header">{subTitle}</p>
    </div>
  );
};

const validate = (isChecked) => {
  return isChecked;
};

const CreateAnAccountFormTs = ({
  dataHeader,
  setShowModal,
  currentPage,
  setCurrentPage,
  setPhoneNumberTs
}) => {
  // Button data
  const createAnAccountDataBtn = {
    text: "Create An Account",
    width: "100%",
    background: "--pc",
    textColor: "white",
  };

  // checkbox function
  const [isChecked, setIsChecked] = useState(false);
  const handleBoxChange = () => {
    setIsChecked(!isChecked);
  };

  // Inputs validations
  const [signUpInput, setSignUpInput] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    policyNumber: "",
  });

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phoneNumber, email, policyNumber } = signUpInput;

    if (
      !name.trim() ||
      !phoneNumber.trim() ||
      !email.trim() ||
      !policyNumber.trim()
    ) {
      return console.log("Please type in all the inputs");
    }

    if (validate(isChecked)) {
      setShowModal(true);
    } else {
      console.log("Please check the termns and conditions");
    }


    const objectForm = {
      name,
      phoneNumber,
      email,
      policyNumber
    }

    const newPhoneNumber = objectForm.phoneNumber;

    console.log(setPhoneNumberTs)
    // setPhoneNumberTs(newPhoneNumber)
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

    setSignUpInput((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
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
            <label htmlFor="name">Name</label>
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
              value={signUpInput.name}
              onChange={handleChange}
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
              value={signUpInput.phoneNumber}
              onChange={handleChange}
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
              value={signUpInput.email}
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
              value={signUpInput.policyNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <AgreTest
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleBoxChange={handleBoxChange}
        />

        <CustomButton
          text={createAnAccountDataBtn.text}
          width={createAnAccountDataBtn.width}
          background={createAnAccountDataBtn.background}
          textColor={createAnAccountDataBtn.textColor}
          type="submit"
          border="none"
        />
      </form>
      <StatusBar currentPage={currentPage} />
    </div>
  );
};

export default CreateAnAccountFormTs;
