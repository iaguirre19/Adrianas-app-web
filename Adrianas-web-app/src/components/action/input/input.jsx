// import './inputStyle.css'

// const InputStructure = ({label, placeholder, type, name, icon}) => {
    

//     return (
//         <div className="input-content">
//             <div className="input-label">
//                 <label htmlFor={label}>{label}</label>
//             </div>
//             <div className="input-inp">
//                 <div  className='icon-content'>
//                     {icon}
//                 </div>
//                 <input 
//                 className='input-data'
//                 type={type} 
//                 name={name}
//                 placeholder={placeholder} 
//                 />
//             </div>
//         </div>
//     )
// }


// const CustomInput = (props) => {

//     const {label, placeholder, icon, type, name} = props;

    
//     return(
//         <div className="form-container">
//                 <InputStructure label={label} type={type} name={name} placeholder={placeholder} icon={icon} />
//         </div>
//     )
// }

// export default CustomInput

import React, { useState } from 'react';
import './inputStyle.css';

const InputStructure = ({ label, placeholder, type, name, icon, value, onChange }) => {
    return (
        <div className="input-content">
            <div className="input-label">
                <label htmlFor={name}>{label}</label>
            </div>
            <div className="input-inp">
                <div className='icon-content'>
                    {icon}
                </div>
                <input
                    className='input-data'
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}  // Asegúrate de que value esté definido
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

const CustomInput = ({ label, placeholder, icon, type, name, value, onChange}) => {

    const handleChange = (event) => {
        const newValue = event.target.value;
        onChange(newValue);
    }

    return (
        <div className="form-container">
            <InputStructure
                label={label}
                type={type}
                name={name}
                placeholder={placeholder}
                icon={icon}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default CustomInput;



















// import React from 'react';
// import '../../styles/input.css';

// const InputStructure = React.forwardRef(({label, placeholder, type, name, icon}, ref) => {
//     return (
//         <div className="input-content">
//             <div className="input-label">
//                 <label htmlFor={label}>{label}</label>
//             </div>
//             <div className="input-inp">
//                 <div  className='icon-content'>
//                     {icon}
//                 </div>
//                 <input 
//                 className='input-data'
//                 type={type} 
//                 name={name}
//                 placeholder={placeholder} 
//                 ref={ref}
//                 />
//             </div>
//         </div>
//     );
// });

// const CustomInput = React.forwardRef((props, ref) => {
//     const {label, placeholder, icon, type, name} = props;

//     return(
//         <div className="form-container">
//             <InputStructure label={label} type={type} name={name} placeholder={placeholder} icon={icon} ref={ref}/>
//         </div>
//     );
// });

// export default CustomInput;
