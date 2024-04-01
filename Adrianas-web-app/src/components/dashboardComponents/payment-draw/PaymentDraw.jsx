const PaymentDraw = ({amount, date, paymentNumber}) => {
    return (
    <>
      <div className="draw-details">
        <div className="draw-data">
          <h4>${amount}</h4>
          <span>{date}</span>
        </div>
        <div className="draw-right-data">
          <span>Draw Payment {paymentNumber}</span>
        </div>
      </div>
    </>
  );
};

export default PaymentDraw
