import { useEffect, useState } from "react";
import CustomerReview from "./components/reusableComponents/customerReview";
import HeaderLeftSide from "./components/reusableComponents/headerLeftSide";
import StatusBar from "./components/reusableComponents/progressBar";
import SignUpPage from "./components/pages/SingUpPage";
import OtpModal from "./components/modals/OtpModal";
import PasswordForm from "./components/pages/PasswordForm";
import ConfirmationDialog from "./components/reusableComponents/ConfirmationDialog";
import "./App.css";
import LoginComponent from "./components/pages/Login";

const Apps = () => {
  const [customerData, setCustomerData] = useState({
    firstUser: {
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, sed ante dapibus feugiat quis vehicula nec semper, montes sagittis vitae parturient",
      fullName: "Claudia Sheinbuam",
      location: "Rancho Customer",
    },
  });
  const [modalStatus, setModalStatus] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "Harry Styles",
    phoneNumber: "7772562179",
    email: "carrors.locos@gmail.com",
    policyNumber: "857976231023",
  });

  const [step, setStep] = useState(1);
  const [currentStepBar, setCurrentStepBar] = useState(1);
  const [codeOTP, setCodeOTP] = useState(["2", "6", "4", "2", "3"]);
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [containerClassName, setContainerClassName] = useState("");

  useEffect(() => {
    const classMap = {
      signin: 'signin-container',
      signup: 'signup-container'
    }

    setContainerClassName(classMap[authMode] || "")

  }, [authMode])


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

  return (
    <div className="main-conatainer">
      {modalStatus && (
        <OtpModal
          setModalStatus={setModalStatus}
          phoneNumber={phoneNumber}
          codeOTP={codeOTP}
          setIsOTPVerified={setIsOTPVerified}
          setStep={setStep}
        />
      )}
      <div className={containerClassName}>
        <div className="left-side">
          <HeaderLeftSide authMode={authMode} />

          {authMode === "signin" ? (
            <LoginComponent setAuthMode={setAuthMode}/>
          ) : (
            step === 1 && (
              <SignUpPage
                dataHeader={headerFormData[0]}
                setModalStatus={setModalStatus}
                setStep={setStep}
                codeOTP={codeOTP}
                setCodeOTP={setCodeOTP}
                registrationData={registrationData}
                setRegistrationData={setRegistrationData}
              />
            )
          )}
          {step === 3 && (
            <PasswordForm
              dataHeader={headerFormData[1]}
              setStep={setStep}
              setCurrentStepBar={setCurrentStepBar}
            />
          )}
          {step == 4 && (
            <ConfirmationDialog
              title="Congratulations!"
              content="Your account has been successfully created."
              spanContent="Welcome aboard!"
              setAuthMode={setAuthMode}
              setStep={setStep}
            />
          )}

          {authMode === "signup" && <StatusBar currentPage={currentStepBar} />}
        </div>
        <div className="right-side">
          <CustomerReview customerInfo={firstUser} />
        </div>
      </div>
    </div>
  );
};

export default Apps;
