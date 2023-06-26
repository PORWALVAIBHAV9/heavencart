
import { ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import { useContext } from 'react'
import { CartContext } from '../../context/cart-open.context'
import {useEffect} from 'react'





const CartIcon = () =>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    const{cartItems} = useContext(CartContext)

    const toggle = () =>{
        setIsCartOpen(!isCartOpen)
    }
    return(
        <div className='cart-icon-container'>
            < ShopIcon className='shopping-icon' onClick={toggle}/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;
