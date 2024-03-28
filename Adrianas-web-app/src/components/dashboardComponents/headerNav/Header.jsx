import AdrianasLogo from "../../../assets/images/adrianas-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronDown,
  faGear,
  faRightFromBracket,
  faUser,
  faCreditCard,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import NotificationModal from "../../modals/Notification-modal/NotificationsModal";
import "../../../styles/dashboard-styles/HeaderStyles.css";
import { useState } from "react";

const Header = ({ userData }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeModalNotification, setActiveModalNotification] = useState(false)

  // driving the user data into variables
  const { name, lastName, profilePicture, notifications } = userData;
  const { counter, textNotifications } = notifications;

  const handleModalSettings = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleNotificationModal = () => {
    console.log('click en campana')
    setActiveModalNotification(!activeModalNotification)
  }

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <img src={AdrianasLogo} alt="Adrianas logo " />
        </div>
        <div className="header-user-info-panel">
          <div className="notifications-icon">
            <div className="notification-icon-content">
              <FontAwesomeIcon onClick={handleNotificationModal} icon={faBell} />
              <div className="notifications-count">
                <span className="counter">{counter}</span>
              </div>
              {activeModalNotification && <NotificationModal activeModal={activeModalNotification} setActiveModalNotification={setActiveModalNotification}/>}
            </div>
          </div>
          <div className="separation-line-container">
            <div className="line"></div>
          </div>
          <div className="user-data-content">
            <div className="profile-picture">
              <img
                className="profile-img"
                src={profilePicture}
                alt="profile picture"
              />
            </div>
            <div className="user-data">
              <h3>{name}</h3>
              <span>{lastName}</span>
            </div>
          </div>
          <div className="arrow-icon-content">
            <div className="arrow-icon">
              {modalIsOpen ? (
                <FontAwesomeIcon
                  onClick={handleModalSettings}
                  className="settings-arrow-modal"
                  icon={faChevronUp}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={handleModalSettings}
                  className="settings-arrow-modal"
                  icon={faChevronDown}
                />
              )}
            </div>
            <div
              className={`user-settings-modal ${
                modalIsOpen ? "openModal" : ""
              }`}
            >
              <ul>
                <li className="user-settings-content">
                  <FontAwesomeIcon className="icons-settings" icon={faGear} />{" "}
                  <a className="user-settings-link">settings</a>
                </li>
                <li className="user-settings-content">
                  <FontAwesomeIcon className="icons-settings" icon={faUser} />{" "}
                  <a className="user-settings-link">Account Details</a>
                </li>
                <li className="user-settings-content">
                  <FontAwesomeIcon
                    className="icons-settings"
                    icon={faCreditCard}
                  />
                  <a className="user-settings-link">Paymet Information</a>
                </li>
                <li className="user-settings-content">
                  <FontAwesomeIcon
                    className="icons-settings"
                    icon={faRightFromBracket}
                  />
                  <a className="user-settings-link">Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
