import './App.css'
import HeaderInput from './components/reusableComponents/headerLeftSide'
// import Form from './form/components/Form'
import CustomerReview from './components/reusableComponents/customerReview'
import CreateAnAccountForm from './components/pages/CreateAnAccountForm'
import OtpModal from './components/modals/OtpModal'
import CreateAnAccountFormTs from './components/pages/TestForms'
import { useState } from 'react'


function App() {
  const customerData = {
    firstUser: {
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, sed ante dapibus feugiat quis vehicula nec semper, montes sagittis vitae parturient",
      fullName: "Claudia Sheinbuam ",
      location: "Rancho Customer"

    }
  }

  const dataHeaderForm = {
        createFormH:{
          title: "Create an Account",
          subTitle: "Drive Secure, Drive Confidently: Join Adrianas Insurance Today!"
        }
    };


  const firstUser = customerData.firstUser;
  const headerData = dataHeaderForm.createFormH;

  const [showModal, setShowModal] = useState(false)

    


  // const CreateAnAccount = () => {
  //   return <Form  check="True" title="Create an account" subTitle="Drive Secure, Drive Confidently: Join Adrianas Insurance Today!"/>
  // }

  return (
      <div className='signin-page signin-container'>
        {showModal && <OtpModal />}
        <div className='left-side'>
          <HeaderInput />
          {/* <CreateAnAccountForm  dataHeader={headerData}/> */}
          <CreateAnAccountFormTs dataHeader={headerData}  setShowModal={setShowModal}/>
        </div>
        <div className='right-side'>
          <CustomerReview customerInfo={firstUser} />        
        </div>
      </div>
  )
}

export default App
