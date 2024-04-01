import InsuranceDetail from './InsuranceDetail';
import React from 'react';

const InsuranceDetails = ({ insuranceDetailData }) => {
  
    return (
    <>    
      {insuranceDetailData.map((insurance, index) => (
        <React.Fragment key={index}>
          <InsuranceDetail  label={insurance.label} value={insurance.value} />
          {index !== insuranceDetailData.length - 1 && (
            <div
              className="vertical-line"
              style={{ borderLeft: ".2rem solid var(--lc)", height: '80%' }}
            ></div>
          )}
        </React.Fragment>
      ))} 
    </>
  );
};

export default InsuranceDetails;
