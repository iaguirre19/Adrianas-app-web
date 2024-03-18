import { useEffect } from "react";
import '../../styles/errorNoticesStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";



const ErrorNotices = ({ text, status }) => {
  
    // useEffect(() => {
    //     setTimeout(() => {
    //     status(false);
    //     }, 4000);
    // }, []);

    return (
        <div className="error-notices">
          <FontAwesomeIcon icon={faXmark} className="Xmark" /> <span>{text}</span>
        </div>
      );
      
};

export default ErrorNotices;
