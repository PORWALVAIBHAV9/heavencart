import './button.styles.scss'

const button_type_classes = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({button_type,button_name,clicked}) => {
    return (
        <button className={`button-container ${button_type_classes[button_type]}`} onClick={clicked} >
            {`${button_name.charAt(0)+button_name.substring(1, button_name.lengt).toLowerCase()}` }
        </button>
    )
}

export default Button