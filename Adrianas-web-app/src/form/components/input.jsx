import '../../styles/input.css'

const InputStructure = ({label, placeholder, type, name, icon}) => {
    return (
        <div className="input-content">
            <div className="input-label">
                <label htmlFor={label}>{label}</label>
            </div>
            <div className="input-inp">
                <div  className='icon-content'>
                    {icon}
                </div>
                <input 
                className='input-data'
                type={type} 
                name={name}
                placeholder={placeholder} 
                />
            </div>
        </div>
    )
}


const CustomInput = (props) => {

    const {label, placeholder, icon, type, name} = props;

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    
    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <InputStructure label={label} type={type} name={name} placeholder={placeholder} icon={icon} />
            </form>
        </div>
    )
}

export default CustomInput