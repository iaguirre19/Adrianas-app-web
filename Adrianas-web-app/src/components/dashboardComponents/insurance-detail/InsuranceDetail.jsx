import './InsurancedetailStyles.css'

const InsuranceDetail = ({label, value}) => {
    
    return(
        <div className="insurance-section">
            <div className="section-header">
                <h4>{label}</h4>
            </div>
            <div className={`${label.toLowerCase().replace(' ', '-')}-value insurance-value`}><span>{value}</span></div>
        </div>
    )
}

export default InsuranceDetail