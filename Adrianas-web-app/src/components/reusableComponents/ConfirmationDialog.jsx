import checkConfirmatioIcon from '../../assets/images/check.png'
// import CustomButton from '../action/button/Button'
import '../../styles/confirmationDialog.css'
import Button from '../action/button/CustomButton'
const ConfirmationDialog = ({title, content,spanContent,setAuthMode, setStep}) => {
    
    const handleGoLogin = (e) => {
        e.preventDefault()
        setStep(1)
        setAuthMode('signin')
    }

    const buttonStyle = {
        text: "Back to Login",
        background: "var(--pc)",
        textColor: "var(--tcw)",
        with: "100%",
        type: "text",
        border: "none",
        className: "btn-confirmation",
        onClick: handleGoLogin

    }
    
    
    return (
        <div className="confirmation-container">
            <div className="confirmation-content">
                <div className="check-icon">
                    <img src={checkConfirmatioIcon} alt="checkConfirmation" />
                </div>
                <div className='confirmation-data'>
                    <h2 className='confirmation-text'>{title}</h2>
                    <p className='confirmation-content-text'>{content} <span>{spanContent}</span></p>
                </div>
            </div>
            <Button buttonData={buttonStyle} />
        </div>
    )
}


export default ConfirmationDialog