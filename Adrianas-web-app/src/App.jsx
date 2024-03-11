import "./App.css";
import HeaderInput from "./components/reusableComponents/headerLeftSide";
import CustomerReview from "./components/reusableComponents/customerReview";
import OtpModal from "./components/modals/OtpModal";
import SignUpPage from "./components/pages/SingUpPage";
import { useState } from "react";

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
  const firstUser = customerData.firstUser;
  const headerData = dataHeaderForm.createFormH;

  // State of the modal
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [phoneNumberTs, setPhoneNumberTs] = useState('7777777');


  console.log(phoneNumberTs)
  return (
    <div className="signin-page signin-container">
      {showModal && <OtpModal phoneNumberTs={phoneNumberTs}/>}
      <div className="left-side">
        <HeaderInput />
        <SignUpPage
          dataHeader={headerData}
          setShowModal={setShowModal}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPhoneNumber={setPhoneNumberTs}
        />
      </div>
      <div className="right-side">
        <CustomerReview customerInfo={firstUser} />
      </div>
    </div>
  );
}

export default App;
