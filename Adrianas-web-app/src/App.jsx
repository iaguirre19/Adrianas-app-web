import './App.css'
import HeaderInput from './form/components/headerLeftSide'
import Form from './form/components/Form'
import CustomerReview from './form/components/customerReview'


function App() {
  const customerData = {
    firstUser: {
      review: "Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, sed ante dapibus feugiat quis vehicula nec semper, montes sagittis vitae parturient",
      fullName: "Claudia Sheinbuam ",
      location: "Rancho Customer"

    }
  }

  const firstUser = customerData.firstUser



  const CreateAnAccount = () => {
    return <Form  check="True" title="Create an account" subTitle="Drive Secure, Drive Confidently: Join Adrianas Insurance Today!"/>
  }

  return (
      <div className='signin-page signin-container'>
        <div className='left-side'>
          <HeaderInput />
          <CreateAnAccount/>
        </div>
        <div className='right-side'>
          <CustomerReview customerInfo={firstUser} />        
        </div>
      </div>
  )
}

export default App
