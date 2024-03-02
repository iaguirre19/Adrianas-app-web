import './Button.css'
const CustomButton = ({text, onClick, background, textColor, width}) => {

    const buttonStyle = {
        width: width,
        backgroundColor: background,
        color: textColor
    }

    return(
        <div className='btn-container'>
            <button onClick={onClick} style={buttonStyle}>{text}</button>
        </div>
   ) 
}

export default CustomButton