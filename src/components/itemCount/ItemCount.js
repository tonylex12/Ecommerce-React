import React, {useContext} from 'react'; 
//context
import {StoreContext, counterInitialState} from '../../context/StoreContext'
import GenericCounter from '../genericCounter/GenericCounter'
//BOOTSTRAP
import Button from "react-bootstrap/Button";

//STYLES
import './itemcount.scss'

const ItemCount = ({currentStock, item}) => {

    const { 
        handleAdd,
        dispatchCount,
        counterCount
    } = useContext(StoreContext)

    const onAdd = () => {
        handleAdd(item)
    }

    return (
        <>
            <GenericCounter
                onIncrementAction={
                    () => counterCount < item.stock ?
                        dispatchCount('COUNTER_INCREMENT'): 
                        null
                }
                onDecrementAction={
                    () => counterCount > counterInitialState ? 
                        dispatchCount('COUNTER_DECREMENT'): 
                        null
                }
                affectedValue={counterCount}
                disableIncrement={counterCount === currentStock}
                disableDecrement={counterCount === counterInitialState}
            />
            <Button 
                id={item.id}
                disabled={counterCount === 0} 
                variant={counterCount === 0 ? 'outline-secondary' : 'primary'}
                onClick={onAdd}
            >Agregar al carrito</Button>
        </>
    )
}

export default ItemCount