import { useState } from "react";
import PaymentDraw from "../payment-draw/PaymentDraw";
import Button from "../../action/button/CustomButton";
import TransactionsHistoryTable from "../payments-history/PaymentsHistory";
import InsuranceDetails from "../insurance-detail/InsuranceDetails";
import NavMenu from "../navbar-menu/NavMenu";
import "./InsightspanelStyles.css";
import Icons from "../../icons/goblal-icons/Icons";

const UserPanels = () => {
  const menuData = [
    {
      id: "account",
      name: "Account",
    },
    {
      id: "profile",
      name: "Profile",
    },
    {
      id: "payment",
      name: "Payment",
    },
    {
      id: "messages",
      name: "Messages",
    },
  ];
  const [activeMenu, setActiveMenu] = useState(false);

  const onClickNextPayment = () => {
    console.log("Next payment button clicked");
  };
  const handleOnClickPayBill = () => {
    console.log("The user wants to pay his bill");
  };

  const nextPaymentData = [
    {
      amount: "500",
      date: "March 27, 2024",
      paymentNumber: "5",
    },
    {
      amount: "400",
      date: "April 27, 2024",
      paymentNumber: "6",
    },
  ];

  const transactionHistory = [
    {
      id: 1,
      paymentDate: "2024-04-01",
      dueDate: "2024-04-15",
      amount: 500,
      status: "Completed",
    },
    {
      id: 2,
      paymentDate: "2024-03-15",
      dueDate: "2024-03-30",
      amount: 350,
      status: "Completed",
    },
    {
      id: 3,
      paymentDate: "2024-02-28",
      dueDate: "2024-03-14",
      amount: 200,
      status: "Incomplete",
    },
    {
      id: 4,
      paymentDate: "2024-02-28",
      dueDate: "2024-03-14",
      amount: 200,
      status: "Incomplete",
    },
    {
      id: 5,
      paymentDate: "2024-02-28",
      dueDate: "2024-03-14",
      amount: 200,
      status: "Incomplete",
    },
    {
      id: 6,
      paymentDate: "2024-02-28",
      dueDate: "2024-03-14",
      amount: 200,
      status: "Incomplete",
    },
  ];

  const dataButtonsAccount = [
    {
      text: "View all upcoming payments",
      width: "100%",
      background: "#d5d4d7",
      textColor: "black",
      type: "button",
      border: "none",
      className: "next-payment-btn",
      onClick: onClickNextPayment,
    },
    {
      text: "Pay your bill",
      width: "100%",
      background: "var(--pc)",
      textColor: "white",
      type: "button",
      border: "none",
      className: "next-payment-btn",
      onClick: handleOnClickPayBill,
    },
  ];
  const insuranceCoverageData = {
    liability: "Damage to third parties",
    collision: "Own vehicle damages",
    personalInjury: "Medical assistance",
    roadside: "Emergencies on the road",
  };

  const formatValueDollar = (amount) => {
    if (typeof amount !== "number") {
      return console.log("The value is not a number");
    }

    const formattedAmount = amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedAmount;
  };
  const formattedCoveredAmount = formatValueDollar(13646);

  const insuranceDetailsData = [
    {
      label: "Insurance Type",
      value: "Liability",
    },
    {
      label: "Coverege Limit",
      value: formattedCoveredAmount,
    },
    {
      label: "Valid Until",
      value: "June 30, 2024",
    },
  ];
  const { liability, collision, personalInjury, roadside } =
    insuranceCoverageData;

  const handleMenuOnClick = (e) => {
    const menuSelected = e.target;
    console.log(menuSelected);
  };

  return (
    <section className="user-panel-container">
      <div className="user-panel-content">
        <div className="panel-menu">
          <NavMenu items={menuData} />
          <div className="line-menu"></div>
        </div>
        <div className="left-panel-items">
          <div className="panel-insurance-overview card-panel">
            <div className="panel-header">
              <div className="panel-header-details">
                <div className="panel-header-icon-content">
                  <Icons type="fileIcon" classIcon="file-icon" />
                </div>
                <div className="panel-header-title">
                  <h4>Insurance overview</h4>
                </div>
              </div>
              <div className="panel-header-right">
                <p className="date-insurance-overview">
                  Last underwriting <span>July 24th</span>
                </p>
              </div>
            </div>
            <div className="insurance-details-container">
              <InsuranceDetails insuranceDetailData={insuranceDetailsData} />
            </div>
          </div>
          <div className="transaction-panel-container card-panel">
            <div className="panel-header">
              <div className="panel-header-details">
                <div className="panel-header-icon-content">
                  <Icons type="moneyBill" classIcon="money-bill-icon" />
                </div>
                <div className="panel-header-title">
                  <h4>Your Transactions</h4>
                </div>
              </div>
              <div className="panel-header-right panel-header-transactions">
                <div className="download-box-content">
                  <Icons type="downloadIcon" classIcon="dowload-icon" />
                </div>
              </div>
            </div>
            <div className="transactions-navbar">
              <div className="payments-navbar-menu">
                <span>Upcoming payments</span>
                <span>Past payments</span>
              </div>
              <div className="line-menu">
                <div className="line active"></div>
                <div className="line"></div>
              </div>
            </div>
            <TransactionsHistoryTable transactions={transactionHistory} />
          </div>
        </div>
        <div className="right-panel-items">
          <div className="panel-next-payment card-panel">
            <div className="panel-header">
              <div className="panel-header-details">
                <div className="panel-header-icon-content">
                  <Icons type="coinIcon" classIcon="coin-icon" />
                </div>
                <div className="panel-header-title">
                  <h4>Next Payments</h4>
                </div>
              </div>
            </div>
            <div className="draw-main-container">
              {nextPaymentData.map((payment, index) => (
                <PaymentDraw
                  key={index}
                  amount={payment.amount}
                  date={payment.date}
                  paymentNumber={payment.paymentNumber}
                />
              ))}
            </div>
            <div className="panel-next-payment-btn">
              <Button buttonData={dataButtonsAccount[0]} />
            </div>
          </div>
          <div className="panel-insurance-coverage card-panel">
            <div className="panel-header">
              <div className="panel-header-details">
                <div className="panel-header-icon-content">
                  <Icons type="carIcon" classIcon="car-icon" />
                </div>
                <div className="panel-header-title">
                  <h4>Car Insurance Coverage</h4>
                </div>
              </div>
            </div>
            <div className="insurance-coverage-content">
              <ul>
                <li>
                  <p>
                    <span>Liability:</span>
                  </p>
                  <span>{insuranceCoverageData.liability}</span>
                </li>
                <li>
                  <p>
                    <span>Collision and</span>
                    <span>comprehensive:</span>
                  </p>
                  <span>{insuranceCoverageData.collision}</span>
                </li>
                <li>
                  <p>
                    <span>Personal</span>
                    <span>Injury:</span>
                  </p>
                  <span>{insuranceCoverageData.personalInjury}</span>
                </li>
                <li>
                  <p>
                    <span>Roadside</span>
                    <span>Assistance:</span>
                  </p>
                  <span>{insuranceCoverageData.roadside}</span>
                </li>
              </ul>
            </div>
          </div>
          <Button buttonData={dataButtonsAccount[1]} />
        </div>
      </div>
    </section>
  );
};

export default UserPanels;
