const Button = ({buttonData}) => {
  
    const {text, width, background, textColor, type, border, className, onClick} = buttonData

    
    const buttonStyle = {
        width,
        background,
        textColor,
        border
    };

  return (
    <div className="btn-container">
      <button
        onClick={onClick}
        className={className}
        type={type}
        style={buttonStyle}
      >
        {text}
      </button>
    </div>
  );
};

export default Button