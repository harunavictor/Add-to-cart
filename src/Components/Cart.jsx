import React,{useContext} from 'react'
import { CartContext } from '../Contextfile/CartContext'

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const totalPrice = cart.reduce(reducer, 0)
    
    
    return (
        <div>
            <span>items in cart: {cart.length}</span> 
            <br />
            <span>total price: {totalPrice} </span> 
        
        </div>
    )
}
