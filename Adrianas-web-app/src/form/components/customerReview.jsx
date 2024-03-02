import PrevIcon from '../../components/icons/prevent/PreviousIcon'
import NextIcon from '../../components/icons/next/NextIcon'
import DotIcon from '../../components/icons/dot/Dot'


const CustomerReview = ({paginationReview, customerInfo,}) => {
    
    
    return (
        <div className="custom-review-container">
            <div className="progress-points">
                {/* <DotIcon color="--lc" width="10px"/>
                <DotIcon color="--lc" width="10px"/>
                <DotIcon color="--lc" width="10px"/> */}
            </div>
            <div className="review-data">
                <p className="review-text">{customerInfo.review}</p>
            </div>
            <div className="customer-data">
                <div className="data">
                    <p>{customerInfo.fullName}</p> 
                    <p>{customerInfo.locationInfo}</p> 
                </div>
                <div className="nav-button-wraper">
                    <PrevIcon color="--fc" />
                    <NextIcon color="--fc" />
                </div>
            </div>
        </div>         
    )
}

export default CustomerReview