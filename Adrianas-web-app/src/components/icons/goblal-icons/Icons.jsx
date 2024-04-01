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
  faWallet,
  faCoins
} from "@fortawesome/free-solid-svg-icons";

import "./IconsStyles.css";

const Icons = ({ type, classIcon, onClick }) => {
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
    walletIcon: faWallet,
    coinIcon: faCoins

  };

  return (
    <FontAwesomeIcon
      onClick={onClick}
      className={`icon-properties ${classIcon}`}
      icon={icons[type]}
    />
  );
};

export default Icons;
