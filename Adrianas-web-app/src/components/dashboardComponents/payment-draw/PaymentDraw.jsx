const PaymentDraw = ({amount, date, paymentNumber}) => {
    return (
    <div className="draw-container">
      <div className="draw-details">
        <div className="draw-info">
          <h4>${amount}</h4>
          <span>{date}</span>
        </div>
        <div className="draw-button">
          <button>Draw Payment {paymentNumber}</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDraw
