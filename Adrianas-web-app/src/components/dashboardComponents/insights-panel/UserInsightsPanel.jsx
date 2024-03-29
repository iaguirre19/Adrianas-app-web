import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./InsightspanelStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faMoneyBillTransfer,
  faCar,
  faFileArrowDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import PaymentDraw from "../payment-draw/PaymentDraw";
import Button from "../../action/button/CustomButton";
import PaymentHistoryTable from "../payments-history/PaymentsHistory";
import NavMenu from "../navbar-menu/NavMenu";

const UserPanles = () => {
  const panelMenuData = ["Account", "Profile", "Payment", "Messages"];
  const menuData = [{
    id: 'account',
    name: 'Account'
  },
  {
    id: 'profile',
    name: 'Profile'
  },
  {
    id: 'payment',
    name: "Payment"
  },
  {
    id: 'messages',
    name: 'Messages'
  }]
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
  const handleMenuOnClick = (e) => {
    const menuSelected = e.target
    console.log(menuSelected)
  }

  // const menuItemsWithKeys = panelMenuData.map((item) => ({
  //   name: item,
  //   key: uuidv4(),
  // }));

  return (
    <section className="user-panel-container">
      <div className="user-panel-content">
        <div className="panel-menu">
          <NavMenu />
          {/* <ul>
            {menuItemsWithKeys.map((item) => (
              <li onClick={handleMenuOnClick} className="panel-menu-item" key={item.key}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul> */}
          <div className="line-menu">
            {/* {panelMenuData.map((line) => (
              <div key={uuidv4()} className={`menu-line ${activeMenu ? "menu-selected" : ""}`}></div>
            ))} */}
          </div>
        </div>
        <div className="left-panel-items">
          <div className="panel-insurance-overview card-panel">
            <div className="panel-header">
              <div className="panel-header-details">
                <div className="panel-header-icon-content">
                  <FontAwesomeIcon
                    className="icon-dashboard"
                    icon={faFileInvoiceDollar}
                  />
                </div>
                <div className="panel-header-title">
                  <h4>Insurance overview</h4>
                </div>
              </div>
              <div className="panel-header-right">
                <p>
                  Last underwriting <span>July 24th</span>
                </p>
              </div>
            </div>
            <div className="insurance-details-container">
              <div className="insurance-section">
                <div className="section-header">
                  <h4>Insurance type</h4>
                </div>
                <div className="insurance-type-value"></div>
              </div>
              <div className="vertical-line"></div>
              <div className="insurance-section">
                <div className="section-header">
                  <h4>Coverage limit</h4>
                </div>
                <div className="coverage-limit-value"></div>
              </div>
              <div className="vertical-line"></div>
              <div className="insurance-section">
                <div className="section-header">
                  <h4>Valid until</h4>
                </div>
                <div className="valid-until-value"></div>
              </div>
            </div>
          </div>
          <div className="payments-container card-panel">
            <div className="panel-header">
              <div className="panel-header-details">
                <div className="panel-header-icon-content">
                  <FontAwesomeIcon
                    className="icon-dashboard"
                    icon={faMoneyBillTransfer}
                  />
                </div>
                <div className="panel-header-title">
                  <h4>Your Transactions</h4>
                </div>
              </div>
              <div className="panel-header-right">
                <FontAwesomeIcon icon={faFileArrowDown} />
              </div>
            </div>
            <div className="payments-menu">
              <div className="payments-options">
                <span>Upcoming payments</span>
                <span>Past payments</span>
              </div>
              <div className="line-menu"></div>
            </div>
            <PaymentHistoryTable
              transactions={transactionHistory}
              Font={FontAwesomeIcon}
              arrowRight={faChevronRight}
            />
          </div>
        </div>
        <div className="right-panel-items">
          <div className="panel-next-payment card-panel">
            <div className="panel-header">
              <div className="panel-header-details">
                <div className="panel-header-icon-content">
                  <FontAwesomeIcon
                    className="icon-dashboard"
                    icon={faFileInvoiceDollar}
                  />
                </div>
                <div className="panel-header-title">
                  <h4>Next Payments</h4>
                </div>
              </div>
            </div>
            {nextPaymentData.map((payment, index) => (
              <PaymentDraw
                key={index}
                amount={payment.amount}
                date={payment.date}
                paymentNumber={payment.paymentNumber}
              />
            ))}
            <div className="panel-next-payment-btn">
              <Button buttonData={dataButtonsAccount[0]} />
            </div>
          </div>
          <div className="panel-insurance-coverage card-panel">
            <div className="panel-header">
              <div className="panel-header-details">
                <div className="panel-header-icon-content">
                  <FontAwesomeIcon className="icon-dashboard" icon={faCar} />
                </div>
                <div className="panel-header-title">
                  <h4>Car Insurance Coverage</h4>
                </div>
              </div>
              <div className="insurance-coverage-content">
                <ul>
                  <li>
                    <p>Liability:</p>
                    <span>{insuranceCoverageData.liability}</span>
                  </li>
                  <li>
                    <p>Collision and comprehensive:</p>
                    <span>{insuranceCoverageData.collision}</span>
                  </li>
                  <li>
                    <p>Personal Injury:</p>
                    <span>{insuranceCoverageData.personalInjury}</span>
                  </li>
                  <li>
                    <p>Roadside Assistance:</p>
                    <span>{insuranceCoverageData.roadside}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Button buttonData={dataButtonsAccount[1]} />
        </div>
      </div>
    </section>
  );
};

export default UserPanles;
