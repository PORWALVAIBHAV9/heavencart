import './cart-item.styles.scss'


const CartItem = ( {cartproducts} ) =>{
    const {name, price, quantity, imageUrl} =cartproducts

    
    return(
    <div className='cart-item-container'>
        <img className='img' src={imageUrl} alt="" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x {price}</span>
        </div>
    
    </div>)
}

export default CartItem;