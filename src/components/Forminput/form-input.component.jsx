import './form-input.styles.scss'

const FormsInput = ({label, ...otherProps}) =>{
    return(
        <div className="group"> 
            <label className={`${otherProps.value.length > 0 ? 'shrink' : ""}form-input-label` }>{label}</label>
            <input {...otherProps} className="form-input" />
        </div>
    )
};

export default FormsInput;