import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faEnvelope,
  faTriangleExclamation,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./NotificationsModalStyles.css";

const NotificationModal = ({activeModal, setActiveModalNotification}) => {

  const [activeBar, setActiveBar] = useState(true);

  const handleLineClick = () => {
    setActiveBar(!activeBar); // Cambiamos el estado opuesto al actual
  };
  const titleNotificationsModal = "Notifications";
  const title = "Your last bill is overdue";
  const message = "Please pay it as soon possible to avoid late fees.";
  const date = "04/02/24";
  const type = "billing";

  const handleCloseModal = () => {
    console.log("click en close modal")
    setActiveModalNotification(!activeModal)
  }

  return (
    <div className={`notification-container ${activeModal ? 'openNotiModal' : ''}`}>
      <div className="notification-content">
        <div className="title-icon-close">
          <h3>{titleNotificationsModal}</h3>
          <FontAwesomeIcon onClick={handleCloseModal} className="icon" icon={faXmark} />
        </div>
        <div className="notification-section">
          <div className="section-data">
            <span onClick={handleLineClick}>All Notifications</span>
            <span onClick={handleLineClick}>Urgent Notification</span>
          </div>
          <div className="line-content">
            <div
              className={`section-line ${activeBar ? "selected" : "notSelected"}`}
              onClick={handleLineClick}
            ></div>
            <div
              className={`section-line ${activeBar ? "notSelected" : "selected"}`}
              onClick={handleLineClick}
            ></div>
          </div>
        </div>
        <div className="notification-content-message">
          <div className="notification">
            <div className="left-icon">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>
            <div className="notification-data">
              <div className="notification-title">
                <h4>{title}</h4>
                <p>{message}</p>
              </div>
              <div className="notification-date">
                <span>{date}</span>
              </div>
            </div>
            <div className="notification-check-icon">
              <FontAwesomeIcon className="icon" icon={faCircle} />
            </div>
          </div>
          <div className="notification">
            <div className="left-icon">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>
            <div className="notification-data">
              <div className="notification-title">
                <h4>{title}</h4>
                <p>{message}</p>
              </div>
              <div className="notification-date">
                <span>{date}</span>
              </div>
            </div>
            <div className="notification-check-icon">
              <FontAwesomeIcon className="icon" icon={faCircle} />
            </div>
          </div>
          <div className="notification">
            <div className="left-icon">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>
            <div className="notification-data">
              <div className="notification-title">
                <h4>{title}</h4>
                <p>{message}</p>
              </div>
              <div className="notification-date">
                <span>{date}</span>
              </div>
            </div>
            <div className="notification-check-icon">
              <FontAwesomeIcon className="icon" icon={faCircle} />
            </div>
          </div>
          <div className="notification">
            <div className="left-icon">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>
            <div className="notification-data">
              <div className="notification-title">
                <h4>{title}</h4>
                <p>{message}</p>
              </div>
              <div className="notification-date">
                <span>{date}</span>
              </div>
            </div>
            <div className="notification-check-icon">
              <FontAwesomeIcon className="icon" icon={faCircle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
