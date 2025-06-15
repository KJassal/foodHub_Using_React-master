import React, { useContext } from 'react'
import { cartContext } from '../bakreypage/bakreycard'

export default function Cart() {
    const {cart} = useContext(cartContext)
  return (
    <div>
        <p>your cart</p>
        {cart.length === 0 ? (<p>your cart is empty</p>) : (cart.map((item)=>
            <p>{item.name}</p>
        ))
        }       
    </div>
  )
}
