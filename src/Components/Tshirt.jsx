import React, { useContext } from 'react'
import { CartContext } from '../Contextfile/CartContext'


export const Tshirt = ({ name, price }) => {
    const [cart, setCart] = useContext(CartContext)
    
    const addToCart = () => {
        setCart(prevArray =>[...prevArray,{ name, price}]);
    }
    return (
        <div>
            <div>
                <h4>{name}</h4>
                <h4>{price}</h4> 
            </div>
            <button onClick={addToCart}>Add To Cart</button>
            <hr/>
        </div>
    )
}
