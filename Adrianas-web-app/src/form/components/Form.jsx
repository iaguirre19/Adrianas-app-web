import React, { useRef, useState } from 'react';
import FileIcon  from '../../components/icons/fileIcon/FileIcon';
import MailIcon  from '../../components/icons/mailicon/MailIcon';
import PhoneIcon from '../../components/icons/phoneicon/PhoneIcon';
import UserIcon from '../../components/icons/userIcon/UserIcon';
import CustomButton from '../../components/action/button/Button'
import AgreementCheckBox from '../../components/action/agreementCheckBox/AgreementCheck';
import CustomInput from '../../components/action/input/input';
import '../../styles/form.css';
import '../../styles/header-title.css';
import '../../styles/checkbox.css';
import '../../styles/button.css';
import StatusBar from '../../components/reusableComponents/progressBar';


const FormHeader = ({ title, subTitle }) => {
    return (
        <div className="header-title-container">
            <h1 className="title-header">{title}</h1>
            <p className="subtitle-header">{subTitle}</p>
        </div>
    );
}

// const AgreementCheckBox = ({setIsBoxChecked}) => {
//     const [isChecked, setIsChecked] = useState(false);
//     console.log(isChecked)

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked)
//     };

//     return (
//         <div className="agreement-container">
//             <div className='checkbox-content'>
//             <input
//                 type="checkbox"
//                 checked={isChecked}
//                 onChange={handleCheckboxChange}
//             />
//             <label>I agree to the <span>Terms & Privacy</span></label>
//             </div>
//             <p className='agreement-text'>You'll receive a message on your phone to verify your account.</p>
//         </div>

//     );
// }



const Form = ({check, title, subTitle}) => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const policyRef = useRef();
    


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log()
        
        const nameValue = nameRef.current;
        const phoneValue = phoneRef.current;
        const emailValue = emailRef.current.value;
        const policyValue = policyRef.current.value;
    
        // Do whatever you want with these values
        // console.log('Name:', nameValue);
        // console.log('Phone Number:', phoneValue);
        // console.log('Email Address:', emailValue);
        // console.log('Policy Number:', policyValue);
    }


    const createAnAccountDataBtn = {
        text: "Create An Account",
        width: "100%",
        background: "--pc",
        textColor: "white" 
    }


    return (
        <div className='form-container'> 
            <FormHeader title={title} subTitle={subTitle} />  {/* title, subTitle */}
            <form className='form-input-container' onSubmit={handleSubmit} >
                <CustomInput label="Name" name="name" placeholder="Please enter your full name" type="text" icon={<UserIcon />} ref={nameRef}/>
                <CustomInput label="Phone Number" name="phone" placeholder="Please enter your phone number" type="tel" icon={<PhoneIcon/>} ref={phoneRef}/>
                <CustomInput label="E - mail Address" name="email" placeholder="Please enter your email address" type="email" icon={<MailIcon/>} ref={emailRef}/>
                <CustomInput label="Policy Number" name="policy" placeholder="0000 - 5766 - 43565" type="number" icon={<FileIcon />} ref={policyRef}/>
                {check && <AgreementCheckBox showCheck="true"/>}
                <CustomButton text={createAnAccountDataBtn.text} width={createAnAccountDataBtn.width} background={createAnAccountDataBtn.background} textColor={createAnAccountDataBtn.textColor} type="submit" />   
            </form>          
            <StatusBar currentPage={1} />         
        </div>
    );
}

export default Form;


