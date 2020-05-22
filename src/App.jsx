import React from 'react'
import { TshirtList } from './Components/TshirtList'
import { Cart } from './Components/Cart'
import { CartContextProvider} from './Contextfile/CartContext'

const App=()=> {
    return (
        <CartContextProvider>
            <div>
                <Cart />
                <TshirtList />
            </div>
        </CartContextProvider>

    )
}

export default App
