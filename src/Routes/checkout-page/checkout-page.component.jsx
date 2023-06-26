import './checkout.styles.scss'
import {useContext} from 'react'
import { CartContext } from '../../context/cart-open.context'
import CheckoutItems from '../../components/checkout-items/checkout-item.component'

const CheckOut =() =>{
    const {cartItems, addToCartItems, removeCartItems} = useContext(CartContext)
    const totalPrice = cartItems.reduce((totalP,items)=>{
            return totalP+items.price*items.quantity
    },0)

    return(

        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
                

            </div>

          
            {cartItems.map(item=>{
                return (
                    <CheckoutItems key={item.key} cartItem={item}></CheckoutItems>)})}
            <span className='total'>Total:{totalPrice}</span>
        </div>
            

    )
}

export default CheckOut 