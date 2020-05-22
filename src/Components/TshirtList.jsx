import React from 'react'
import { Tshirt } from './Tshirt'

export const TshirtList = () => {
    const database = [
        { name: 'Jean', price: '#3000', id: 1 },
        { name: 'T-shirt', price: '#2000.09', id: 2 },
        { name: 'Yello polo', price: '#100.00', id: 3 },
        { name: 'White Shirt', price: '#25,000', id: 4},
    ]
    return (
        <div> 
            {database.map(item => (
                <Tshirt key={item.id} name={item.name} price={item.price} />
            ))  }
        </div>
    )
}
