import './drop-down.styles.scss'
import BUTTON from '../button/dynamic-button.component'
import CartIcon from '../cart-icon/cart-icon.component';
import {useContext} from 'react'
import { CartContext} from '../../context/cart-open.context'
import  CartItem  from '../cart-itens/cart-item.component'
import {useNavigate} from 'react-router-dom'

const DropDown=() =>{
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = ()=>{
        navigate('/checkout')
        
    }
  


    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((items) => (
                    <CartItem key={items.id}cartproducts={items}></CartItem>

                ))}
                

            </div>
            <button onClick={goToCheckoutHandler} className='button-container'>
                Go TO Checkout
            </button>
        </div>
    )

}
    
export default DropDown;