import React, {useContext} from 'react'; 
//context
import {StoreContext, counterInitialState} from '../../context/StoreContext'
//BOOTSTRAP

import Button from "react-bootstrap/Button";
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
//STYLES
import './itemcount.scss'

const ItemCount = ({currentStock, item}) => {

    const { 
        handleAdd,
        dispatchCount,
        counterCount
    } = useContext(StoreContext)

    return (
        <>
            <div className="counter">
                <Button 
                    onClick={
                        () => counterCount > counterInitialState ? 
                            dispatchCount('COUNTER_DECREMENT'): 
                            null
                        }
                    disabled={counterCount === counterInitialState}
                    variant="outline-secondary" 
                >
                    <FaMinus size={20} />
                </Button>
                <p>{counterCount}</p>
                <Button 
                    onClick={
                        () => counterCount < item.stock ?
                            dispatchCount('COUNTER_INCREMENT'): 
                            null
                    } 
                    disabled={counterCount === currentStock} 
                    variant="outline-secondary">
                    <FaPlus size={20} />
                </Button>
            </div>
            <Button 
                id={item.id}
                disabled={counterCount === 0} 
                variant={counterCount === 0 ? 'outline-secondary' : 'primary'}
                onClick={handleAdd}
            >Agregar al carrito</Button>
        </>
    )
}

export default ItemCount