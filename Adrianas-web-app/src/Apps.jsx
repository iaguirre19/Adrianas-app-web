import { useEffect, useState } from "react";
import CustomerReview from "./components/reusableComponents/customerReview";
import HeaderInput from "./components/reusableComponents/headerLeftSide";
import StatusBar from "./components/reusableComponents/progressBar";
import SignUpPage from "./components/pages/SingUpPage";
import OtpModal from "./components/modals/OtpModal";
import PasswordForm from "./components/pages/PasswordForm";
import ConfirmationDialog from "./components/reusableComponents/ConfirmationDialog";
import "./App.css";


const Apps = () => {
    const [customerData, setCustomerData] = useState({
        firstUser: {
            review:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, sed ante dapibus feugiat quis vehicula nec semper, montes sagittis vitae parturient",
            fullName: "Claudia Sheinbuam",
            location: "Rancho Customer",
        }
    });
    const [modalStatus, setModalStatus] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        name: "Harry Styles",
        phoneNumber: "7772562179",
        email: "carrors.locos@gmail.com",
        policyNumber: "857976231023",
      }) 


    const [step, setStep] = useState(3);
    const [currentStepBar, setCurrentStepBar] = useState(1)
    const [codeOTP, setCodeOTP] = useState(["2", "6", "4", "2", "3"]);
    const [isOTPVerified, setIsOTPVerified] = useState(false);
    const [test, setTest] = useState(true)
    const [showPasswordForm, setShowPasswordForm] = useState(false)


    // useEffect(() => {
    //     if(step === 1){
    //         const data = {
    //             firstUser: {
    //                 review:
    //                     "Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, sed ante dapibus feugiat quis vehicula nec semper, montes sagittis vitae parturient",
    //                 fullName: "Claudia Sheinbuam",
    //                 location: "Rancho Customer",
    //             },
    //         };
    //         setCustomerData(data);
    //     }
        

    // }, [step]);
    
    // if (!customerData) {
    //     return null; // O cualquier otro indicador de carga que desees mostrar
    // }


    const headerFormData = [
        {
          title: "create an Account",
          subTitle:
            "Drive Secure, Drive Confidently: Join Adrianas Insurance Today!",
        },
        {
          title: "Create a Passsword",
          subTitle: "Choose a secure password to safeguard your information.",
        },
    ];
    const firstUser = customerData.firstUser;
    const phoneNumber = registrationData.phoneNumber;
    const email = registrationData.email


    return (
        <div className="signin-page signin-container">
            <div className="left-side">
            <HeaderInput />
            {step === 1 && (
                <SignUpPage
                dataHeader={headerFormData[0]}
                setModalStatus={setModalStatus}
                setStep={setStep}
                codeOTP={codeOTP}
                setCodeOTP={setCodeOTP}
                registrationData={registrationData}
                setRegistrationData={setRegistrationData}
              />
            )}
            {step === 2 && (<OtpModal  
            setModalStatus={setModalStatus} 
            phoneNumber={phoneNumber}
            codeOTP={codeOTP}
            setIsOTPVerified={setIsOTPVerified}
            setStep={setStep}
            />)}
            {step === 3 && (
                // <PasswordForm dataHeader={dataHeader[1]} setStep={setStep} />
                <PasswordForm dataHeader={headerFormData[1]}  setStep={setStep}/>

                // <h1>Hola mundo</h1>
            )}
            {step == 4 && (
                <ConfirmationDialog title="Congratulations!" content="Your account has been successfully created." spanContent="Welcome aboard!"/>
            )}

            <StatusBar currentPage={currentStepBar} />
            </div>
            <div className="right-side">
                <CustomerReview customerInfo={firstUser} />
            </div>
        </div>
    );
};

export default Apps;
