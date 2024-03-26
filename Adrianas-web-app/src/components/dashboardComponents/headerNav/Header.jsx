import AdrianasLogo from '../../../assets/images/adrianas-logo.svg'
import profilePicture from '../../../assets/images/profile-picture.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faChevronDown

} from "@fortawesome/free-solid-svg-icons";
import '../../../styles/dashboard-styles/HeaderStyles.css'
import { useState } from 'react';

const Header = () => {
    // const {name, lastName, picture, notifications} = userData;
    const [counterNotifications, setCounterNotificationes] = useState("1")
    

    return(
        <div className='header-container'>
            <div className="header-content">
                <div className="header-logo">
                    <img src={AdrianasLogo} alt="Adrianas logo " />
                </div>
                <div className="header-user-info-panel">
                    <div className="notifications-icon">
                        <div className="notification-icon-content">
                            <FontAwesomeIcon icon={faBell} />
                            <div className="notifications-count">
                                <span className='counter'>{counterNotifications}</span>
                            </div>
                        </div>
                    </div>
                    <div className="separation-line-container">
                        <div className="line"></div>
                    </div>
                    <div className="user-data-content">
                        <div className="profile-picture">
                             <img className='profile-img' src={profilePicture} alt="profile picture" />
                        </div>
                        <div className='user-data'>
                            <h3>Melissa</h3>
                            <span>Rodrigues Cook</span>
                        </div>
                    </div>
                    <div className="arrow-icon-content">
                        <div className="arrow-icon">
                        <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className="user-settings-modal">
                            <ul>
                                <li><a>settings</a></li>
                                <li><a>settings</a></li>
                                <li><a>settings</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header