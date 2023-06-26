import './checkout.styles.scss'
import {CartContext}  from '../../context/cart-open.context'
import {useContext} from 'react'


const CheckoutItems = ({cartItem})=>{
    const {name, quantity, price, imageUrl} = cartItem
    const { deleteItem, removeCartItems, addToCartItems } =useContext(CartContext)
    return(
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt="" />
        </div>
        <span className='name'>{name}</span>
        
        <span className='quantity'><span className='sign' onClick={()=>{removeCartItems(cartItem)}}>-</span>  {quantity}  <span className='sign' onClick={()=>{addToCartItems(cartItem)}}>+</span></span>
        
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>{deleteItem(cartItem)}}>&#10005;</div>


    </div>
    )
}

export default CheckoutItems