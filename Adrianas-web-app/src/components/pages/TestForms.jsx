import { useState } from "react";


import FileIcon from "../../components/icons/fileIcon/FileIcon";
import MailIcon from "../../components/icons/mailicon/MailIcon";
import PhoneIcon from "../../components/icons/phoneicon/PhoneIcon";
import UserIcon from "../../components/icons/userIcon/UserIcon";
import CustomButton from "../../components/action/button/Button";
import StatusBar from "../reusableComponents/progressBar";
// import AgreementCheckBox from "../action/agreementCheckBox/AgreementCheck";
import ModalOtp from "../modals/OtpModal";
import "../../styles/form.css";
import "../../styles/header-title.css";
import "../../styles/checkbox.css";
import "../../styles/button.css";
import '../../styles/createAnAccountForm.css'
import AgreTest from "../action/agreementCheckBox/AgTest";



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

const CreateAnAccountFormTs = ({dataHeader, setShowModal}) => {
    const createAnAccountDataBtn = {
      text: "Create An Account",
      width: "100%",
      background: "--pc",
      textColor: "white",
    };

    const [name, setName] = useState('')
    const [isChecked, setIsChecked] = useState(false)


    const handleBoxChange = () => {
        setIsChecked(!isChecked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(validate(isChecked)){
            setShowModal(true)
        }else{
            console.log("Please check the termns and conditions")
        }
    }



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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              name="phone"
              placeholder="Please enter your phone number"
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
              type="number"
              name="policy"
              placeholder="0000 - 5766 - 43565"
            />
          </div>

        </div>
        <AgreTest isChecked={isChecked} setIsChecked={setIsChecked} handleBoxChange={handleBoxChange} />

        <CustomButton
          text={createAnAccountDataBtn.text}
          width={createAnAccountDataBtn.width}
          background={createAnAccountDataBtn.background}
          textColor={createAnAccountDataBtn.textColor}
          type="submit"
          border="none"
        />
      </form>
      {/* {showModal && <ModalOtp />} */}
      <StatusBar currentPage={1} />
    </div>
  );
};

export default CreateAnAccountFormTs;
