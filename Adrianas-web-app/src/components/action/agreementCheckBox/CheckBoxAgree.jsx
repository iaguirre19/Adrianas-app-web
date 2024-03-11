
const CheckBoxAgree = ({ isChecked, setIsChecked, handleBoxChange}) => {

  return (
    <div className="agreement-container">
      <div className="checkbox-content">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleBoxChange}
          id="inputCheck"
        />
        <label>
          I agree to the <span>Terms & Privacy</span>
        </label>
      </div>
      <p className="agreement-text">
        You'll receive a message on your phone to verify your account.
      </p>
    </div>
  );
};

export default CheckBoxAgree;