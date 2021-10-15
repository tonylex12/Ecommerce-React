import React, {useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
import {Button} from 'react-bootstrap'
import GenericCounter from '../genericCounter/GenericCounter'
//SCSS
import './itemInCart.scss'


const ItemInCart = ({item}) => {
    
    const {handleRemove, handleCartDecrement, handleCartIncrement, data} = useContext(StoreContext)

    const onRemove = () => {
        handleRemove(item)
    }

    const onDecrementAction = () => {
        handleCartDecrement(item)
    }

    const onIncrementAction = () => {
        handleCartIncrement(item)
    }

    return (
        <div className='productInCart' id={item.item.id}>
            <img alt={item.item.id} src={item.item.pictureUrl}></img>
            <div className='cart_body'>
                <h3>{item.item.name}</h3>
                <p>$ {item.item.price}</p>
                <div>
                    
                    <GenericCounter
                        onIncrementAction={
                            ()=>{
                                onIncrementAction()
                            }
                        }
                        onDecrementAction={
                            ()=>{
                                onDecrementAction()
                            }
                        }
                        disableDecrement={
                            item.quantity === 0
                        }
                        disableIncrement={
                            item.quantity === item.stockInStore
                        }
                        affectedValue={'Cantidad: ' + item.quantity}
                    />
                </div>
                <Button
                    id={item.item.id}
                    onClick={onRemove} 
                    variant="outline-danger"
                >Remover</Button>
                
            </div>
        </div>
    )
}

export default ItemInCart