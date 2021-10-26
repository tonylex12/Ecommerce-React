import React, {useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
//COMPONENTS
import EmptyCart from '../EmptyCart/EmptyCart'
import ItemInCart from '../itemInCart/ItemInCart'
import CartTotal from '../cartTotal/CartTotal'
import NewPurchase from '../newPurchase/NewPurchase'
import './cart.scss'

const Cart = () => {

    const { cart, newPurchase } = useContext(StoreContext)

    return (
        <>
        {
            newPurchase ?
                <NewPurchase />
                : <div className='container cart_container'>
            
                    {cart.length === 0 ? 
                        <EmptyCart />
                        : <>
                        <div className='cart_items'>
                            {cart.map((itemInCart) => 
                                <div key={itemInCart.item.id + itemInCart.quantity}  className='cart_items'>
                                    <ItemInCart 
                                        item={itemInCart} 
                                    />
                                </div>
                            )}
                        </div>
                        <CartTotal />
                        </>
                    }
                    
                
            </div>
        }

        </>
    )
}

export default Cart