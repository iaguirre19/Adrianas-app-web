import AdrianasLogo from '../../../assets/images/adrianas-logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faArrowDown

} from "@fortawesome/free-solid-svg-icons";
import './HeaderStyles.css'

const Header = () => {
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
                                1
                            </div>
                        </div>
                    </div>
                    <div className="separation-line"></div>
                    <div className="user-data-content">
                        <div className="profile-picture">
                             <img src="" alt="profile picture" />
                        </div>
                        <div className='user-data'>
                            <h3>Melissa</h3>
                            <span>Rodrigues Cook</span>
                        </div>
                    </div>
                    <div className="arrow-icon-content">
                        <div className="arrow-icon">
                            <FontAwesomeIcon icon={faArrowDown} />
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