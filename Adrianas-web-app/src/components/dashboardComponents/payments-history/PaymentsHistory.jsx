import Icons from "../../icons/goblal-icons/Icons";
const PaymentHistoryTable = ({ transactions}) => {
  return (
    <div className="payment-history-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Payment Date</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.paymentDate}</td>
              <td>{transaction.dueDate}</td>
              <td>{`$ ${transaction.amount}`}</td>
              <td>{transaction.status}</td>
              <td>
                <Icons type='rightArrowIcon' classIcon='right-arrow-icon' /> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryTable;
