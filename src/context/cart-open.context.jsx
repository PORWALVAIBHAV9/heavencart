import {createContext, useState, useEffect} from 'react'



export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    cartItems: [],
    addToCartItems :() =>{},
    cartCount:0,
    removeCartItems :() =>{},
    deleteItem:()=>{},
    totalPrice:()=>{},

})

const addCartItems =(cartItems, ProductToAdd)=>{
    
    const existingItem = cartItems.find((item)=> item.id === ProductToAdd.id );

    if(existingItem){
        return cartItems.map((item)=>{

            if(item.id===ProductToAdd.id){
                return {...item, quantity:item.quantity + 1}
            }
            return item
        }
        )


    }
    
    
    

    

    return [...cartItems,{...ProductToAdd, quantity:1}];
    
}

const removeItems=(cartItems,itemToRemove)=>{
    const existingCartItem = cartItems.find((item)=> 
    item.id===itemToRemove.id)
    
    if(existingCartItem.quantity===1){
        return cartItems.filter((item)=>item.id!==itemToRemove.id)
        
        }
        return cartItems.map(item=>{
            return item.id===itemToRemove.id ? {...item, quantity:item.quantity-1} : item})

    
}

const deleteSelecItems = (cartItems,itemToRemove)=>{
    const existingCartItem = cartItems.find((item)=> 
    item.id===itemToRemove.id)
    
    if(existingCartItem){
        return cartItems.filter((item)=>item.id!==itemToRemove.id)
        
        }
    }

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,  setCartItems] = useState([])
    const[cartCount, setCartCount] = useState(0)
    let total = 0
    useEffect(()=>{cartItems.map(item=> total += item.quantity )
    setCartCount(total)}, [cartItems])

    
    const removeCartItems = (itemToRemove)=>{
        setCartItems(removeItems(cartItems, itemToRemove))
    }
    
    const addToCartItems = (ProductToAdd) =>{
        setCartItems(addCartItems(cartItems, ProductToAdd))
    }

    const deleteItem = (itemToRemove)=>{
        setCartItems(deleteSelecItems(cartItems, itemToRemove))
    }

    
    const value = {isCartOpen, setIsCartOpen, cartItems, addToCartItems, cartCount, removeCartItems, deleteItem}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}