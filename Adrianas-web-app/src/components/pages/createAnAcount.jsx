import React, { useRef, useState } from "react";
import FileIcon from "../../components/icons/fileIcon/FileIcon";
import MailIcon from "../../components/icons/mailicon/MailIcon";
import PhoneIcon from "../../components/icons/phoneicon/PhoneIcon";
import UserIcon from "../../components/icons/userIcon/UserIcon";
import CustomButton from "../../components/action/button/Button";
import CustomInput from "../../components/action/input/input";
// import AgreementCheckBox from '../action/agreementCheckBox/AgreementCheck';
import StatusBar from "../reusableComponents/progressBar";
import "../../styles/form.css";
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

const CreateAnAccountForm = ({ title, subTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [policy, setPolicy] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)

  };


  const createAnAccountDataBtn = {
    text: "Create An Account",
    width: "100%",
    background: "--pc",
    textColor: "white",
  };

  return (
    <div className="form-container">
      <FormHeader title={title} subTitle={subTitle} /> {/* title, subTitle */}
      <form className="form-input-container" onSubmit={handleSubmit}>
        
        
      <div className="input-content">
          <div className="input-label">
              <label htmlFor="name">Name</label>
          </div>
          <div className="input-inp">
              <div className='icon-content'>
                  <UserIcon />
              </div>
              <input
                  className='input-data'
                  type="text"
                  name="name"
                  placeholder="Please enter your full name"
                  // value={value}  
                  // onChange={handleChange}
              />
          </div>
      </div>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* <CustomInput
          label="Name"
          name="name"
          placeholder="Please enter your full name"
          type="text"
          icon={<UserIcon />}
          value={value}
          onChange={handleChange}
          // setValue={setValue}
        />
        <CustomInput
          label="Phone Number"
          name="phone"
          placeholder="Please enter your phone number"
          type="tel"
          icon={<PhoneIcon />}
          value={value}
          onChange={handleChange}
        />
        <CustomInput
          label="E - mail Address"
          name="email"
          placeholder="Please enter your email address"
          type="email"
          icon={<MailIcon />}
          value={value}
          onChange={handleChange}
        />
        <CustomInput
          label="Policy Number"
          name="policy"
          placeholder="0000 - 5766 - 43565"
          type="number"
          icon={<FileIcon />}
          value={value}
          onChange={handleChange}
        /> */}
        {/* <AgreementCheckBox check={}/> */}
        <CustomButton
          text={createAnAccountDataBtn.text}
          width={createAnAccountDataBtn.width}
          background={createAnAccountDataBtn.background}
          textColor={createAnAccountDataBtn.textColor}
          type="submit"
        />
      </form>
      <StatusBar currentPage={1} />
    </div>
  );
};

export default CreateAnAccountForm;
