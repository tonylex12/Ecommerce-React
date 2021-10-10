import React, {useContext} from 'react'; 
//context
import {StoreContext} from '../../context/StoreContext'
//BOOTSTRAP

import Button from "react-bootstrap/Button";
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
//STYLES
import './itemcount.scss'


const ItemCount = ({currentStock, item}) => {

    const { 
        count, 
        initial, 
        handleIncrement, 
        handleDecrement,
        setAdded,
        setStock,
        added,
        stock,
        totalQuantity,
        setTotalQuantity,
        setCart,
        cart
    } = useContext(StoreContext)

    const toggleAdded = () => {
        setAdded(!added);
        setStock(stock - count);
        setTotalQuantity(totalQuantity + 1);
        if (cart.length === 0 ) {
            setCart([{id:item.id,item:item,quantity:count}])
        } else {
            setCart(cart => [...cart, {id:item.id,item:item,quantity:count}])
        }
    }

    return (
        <>
            <div className="counter-container">
                <Button 
                    onClick={handleDecrement} 
                    disabled={count === initial}
                    variant="outline-secondary" 
                >
                    <FaMinus size={20} />
                </Button>
                <p>{count}</p>
                <Button 
                    onClick={handleIncrement} 
                    disabled={count === currentStock} 
                    variant="outline-secondary">
                    <FaPlus size={20} />
                </Button>
            </div>
            <Button 
                disabled={count === 0} 
                variant={count === 0 ? 'outline-secondary' : 'danger'}
                onClick={toggleAdded}
            >Agregar al carrito</Button>
            
        </>
    )
}

export default ItemCount