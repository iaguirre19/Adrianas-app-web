import { useEffect, useState } from "react";
import "./App.css";
import './styles/passwordFormStyle.css'
import HeaderInput from "./components/reusableComponents/headerLeftSide";
import CustomerReview from "./components/reusableComponents/customerReview";
import OtpModal from "./components/modals/OtpModal";
import SignUpPage from "./components/pages/SingUpPage";
import PasswordForm from "./components/pages/PasswordForm";
import StatusBar from "./components/reusableComponents/progressBar";




function App() {
  const customerData = {
    firstUser: {
      review:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, sed ante dapibus feugiat quis vehicula nec semper, montes sagittis vitae parturient",
      fullName: "Claudia Sheinbuam ",
      location: "Rancho Customer",
    },
  };

  const dataHeaderForm = {
    createFormH: {
      title: "Create an Account",
      subTitle:
        "Drive Secure, Drive Confidently: Join Adrianas Insurance Today!",
    },
    
  };

  const headerFormData = [
    {
      title: "create an Account",
      subTitle: "Drive Secure, Drive Confidently: Join Adrianas Insurance Today!" 
    },
    {
      title: "Create a Passsword",
      subTitle: "Choose a secure password to safeguard your information."
    }
  ]
  const firstUser = customerData.firstUser;
  const headerData = dataHeaderForm.createFormH;

  // State of the modal
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [phoneNumberCa, setPhoneNumberCa] = useState("");
  const [codeOTP, setCodeOTP] = useState(["2", "6", "4", "2", "3"]);
  const [isOTPVerified, setIsOTPVerified] = useState(true);

  useEffect(() => {
    setShowModal(false)
  }, [isOTPVerified])

  return (
    <div className="signin-page signin-container">
      {showModal && (
        <OtpModal 
        setShowModal={setShowModal} 
        phoneNumberCa={phoneNumberCa} 
        codeOTP={codeOTP}
        setIsOTPVerified={setIsOTPVerified} />
      )}
      <div className="left-side">
        <HeaderInput />
        {isOTPVerified ? <PasswordForm 
        dataHeader={headerFormData} 
        /> : <SignUpPage
          dataHeader={headerData}
          setShowModal={setShowModal}
          setCurrentPage={setCurrentPage}
          setPhoneNumberCa={setPhoneNumberCa}
          codeOTP={codeOTP}
          setCodeOTP={setCodeOTP}
        />}
        <StatusBar currentPage={currentPage} />
      </div>
      <div className="right-side">
        <CustomerReview customerInfo={firstUser} />
      </div>
    </div>
  );
}

export default App;
