import React, { useState } from "react";

const AgreementCheckBox = ({ onSubmit }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onSubmit(checked); // Call the onSubmit function with the updated checkbox state
  };

  return (
    <div className="agreement-container">
      <div className="checkbox-content">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
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

export default AgreementCheckBox;
