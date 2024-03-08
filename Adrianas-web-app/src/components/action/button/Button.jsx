import PropTypes from "prop-types";
import './Button.css'

const CustomButton = ({text, background, textColor, width, type, border}) => {


    const buttonStyle = {
        width: width,
        backgroundColor: background,
        color: textColor,
        border: border
    }

    return(
        <div className='btn-container'>
            <button  type={type} style={buttonStyle}>{text}</button>
        </div>
   ) 
}

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}

export default CustomButton