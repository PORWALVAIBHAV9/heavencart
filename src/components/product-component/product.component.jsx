import './product-card.styles.scss'
import BUTTON from '../button/dynamic-button.component'
import {CartContext } from '../../context/cart-open.context'
import {useContext} from 'react'


const ProductCard = ({ products }) =>{
    const {name, price, imageUrl} = products
    const {cartItems, addToCartItems} = useContext(CartContext)
    const addProductToCart = () => addToCartItems(products)

    
    
    return(

    <div className="product-card-container">
        <img src={imageUrl} alt="" />
        <footer className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            
        </footer>
       <BUTTON type='button' button_type='inverted' button_name='Add to cart' clicked={addProductToCart}>Add to cart</BUTTON>
    </div>)
}

export default ProductCard;