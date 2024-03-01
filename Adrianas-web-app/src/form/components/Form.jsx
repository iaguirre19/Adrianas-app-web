import React, { useState } from 'react';
import FileIcon  from '../../components/icons/fileIcon/FileIcon';
import MailIcon  from '../../components/icons/mailicon/MailIcon';
import PhoneIcon from '../../components/icons/phoneicon/PhoneIcon';
import UserIcon from '../../components/icons/userIcon/UserIcon';
import CustomButton from '../components/button'
import CustomInput from './input';
import '../../styles/form.css';
import '../../styles/header-title.css';
import StatusBar from './progressBar';


const FormHeader = ({ title, subTitle }) => {
    return (
        <div className="header-title-container">
            <h1 className="title-header">{title}</h1>
            <p className="subtitle-header">{subTitle}</p>
        </div>
    );
}


const Form = (props) => {
    const { check } = props;
    const AgreementCheckBox = () => {
        const [isChecked, setIsChecked] = useState(false);
    
        const handleCheckboxChange = () => {
            setIsChecked(!isChecked);
        };
    
        return (
            <div className="agreement-container">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label>I agree to the <span>Terms & Privacy</span></label>
                <p>You'll receive a message on your phone to verify your account.</p>
            </div>

        );
    }


    return (
        <div className='form-container'>
            <FormHeader title={props.title} subTitle={props.subTitle} />
            <div className='form-input-container'>
                <CustomInput label="Name" name="name" placeholder="Please enter your full name" type="text" icon={<UserIcon />}/>
                <CustomInput label="Phone Number" name="phone" placeholder="Please enter your phone number" type="tel" icon={<PhoneIcon/>}/>
                <CustomInput label="E - mail Address" name="email" placeholder="Please enter your email address" type="email" icon={<MailIcon/>}/>
                <CustomInput label="Policy Number" name="policy" placeholder="0000 - 5766 - 43565" type="number" icon={<FileIcon />}/>
                {check && <AgreementCheckBox />}
                <CustomButton text="Create an Account"/>   
            </div>
            <StatusBar currentPage={1} />         
        </div>
    );
}

export default Form;
