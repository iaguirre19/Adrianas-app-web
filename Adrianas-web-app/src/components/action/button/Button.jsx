import PropTypes from "prop-types";
import "./Button.css";

const CustomButton = ({
  text,
  background,
  textColor,
  width,
  type,
  border,
  className,
  onClick,
}) => {
  const buttonStyle = {
    width: width,
    backgroundColor: background,
    color: textColor,
    border: border,
    className: className
  };

  return (
    <div className="btn-container">
      <button onClick={onClick} className={className} type={type} style={buttonStyle}>
        {text}
      </button>
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

export default CustomButton;
