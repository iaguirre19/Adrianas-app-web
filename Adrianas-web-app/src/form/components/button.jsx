import React from 'react';

const CustomButton = ({text, onClick}) => {

    return(
        <div className='btn-container'>
            <button onClick={onClick}>{text}</button>
        </div>
   ) 
}

export default CustomButton