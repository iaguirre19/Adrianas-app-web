import checkConfirmatioIcon from '../../assets/images/check.png'
import CustomButton from '../action/button/Button'
import '../../styles/confirmationDialog.css'
const ConfirmationDialog = ({title, content,spanContent, btnText, onClick}) => {
    

    const buttonStyle = {
        text: "Back to Login",
        background: "var(--pc)",
        textColor: "var(--tcw)",
        with: "100%",
        type: "text",
        border: "none",
        className: "btn-confirmation",
        onClick

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
            <CustomButton 
                className={buttonStyle.className}
                text={buttonStyle.text}
                width={buttonStyle.with}
                background={buttonStyle.background}
                textColor={buttonStyle.textColor}
                type={buttonStyle.type}
                border={buttonStyle.border}


            />
        </div>
    )
}


export default ConfirmationDialog