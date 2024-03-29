import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileInvoiceDollar,
    faMoneyBillTransfer,
    faCar,
    faFileArrowDown,
    faChevronRight,
    faEnvelope,
    faKey,
    faEye,
    faEyeSlash,
  } from "@fortawesome/free-solid-svg-icons";

import './IconsStyles.css'

const Icons = ({type, classIcon, beat, onClick}) => {
    const icons = {
        envelopeIcon: faEnvelope,
        fileIcon: faFileInvoiceDollar,
        moneyBill: faMoneyBillTransfer,
        carIcon: faCar,
        downloadIcon: faFileArrowDown,
        rightArrowIcon: faChevronRight, 
        keyIcon: faKey,
        eyeIcon: faEye,
        eyeSlashIcon: faEyeSlash,

    }

    return(
        <div >
            <FontAwesomeIcon onClick={onClick} beat={beat} className={`icon-properties ${classIcon}`} icon={icons[type]} />
        </div>
    )
}

export default Icons