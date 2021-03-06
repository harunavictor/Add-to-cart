import React,{useState} from 'react'

export const CartContext = React.createContext();
export const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <div>
            <CartContext.Provider value={[cart,setCart]}>
            {props.children}
            </CartContext.Provider>
        </div>
    )
}

