import DotIcon from '../icons/dot/Dot'
import '../../styles/customerReview.css'
import DoubleQuotes from '../../components/icons/double-quotes/DoubleQuotes'
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight' 
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft' 
import { useState } from 'react'


 



const CustomerReview = ({customerInfo}) => {
    const [reviewIndex,setReviewIndex] = useState(1)

    
    return (
        <div className="custom-review-container">
            <div className='backdrop z-bottom'></div>
            <div className='customer-content z-top'>
                <div className='top-review'>
                <div className='doble-quoutes-content'>
                    <DoubleQuotes color="var(--tcr)" width="2.2rem" />
                </div>
                <div className="progress-points">
                    <FontAwesomeIcon icon={faCircle} className='icon-dot'/>
                    <FontAwesomeIcon icon={faCircle} className='icon-dot'/>
                    <FontAwesomeIcon icon={faCircle} className='icon-dot'/>
                </div>
                </div>
                <div className='review-content'>
                <div className="review-data">
                    <p className="review-text">{customerInfo.review}</p>
                </div>
                <div className="customer-data">
                    <div className="data">
                        <p>{customerInfo.fullName}</p> 
                        <p>{customerInfo.location}</p> 
                    </div>
                    <div className="nav-button-wraper">
                    <FontAwesomeIcon icon={faArrowLeft} className='icon-customer-review'/>
                    <FontAwesomeIcon icon={faArrowRight} className='icon-customer-review'/>
                    </div>
                </div>
                </div>
            </div>
        </div>         
    )
}

export default CustomerReview