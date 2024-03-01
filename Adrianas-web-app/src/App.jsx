import './App.css'
import HeaderInput from './form/components/headerLeftSide'
import Form from './form/components/Form'


function App() {

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

        </div>
      </div>
  )
}

export default App
