import React, {useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
//SCSS
import './itemInCart.scss'

const ItemInCart = ({details}) => {
    
    const {handleRemove} = useContext(StoreContext)

    return (
        <div className='productInCart col-lg-4'>
            <img src={details.item.pictureUrl}></img>
            <div>
                <h3>{details.item.name}</h3>
                <p>$ {details.item.price}</p>
                <p>Cantidad: {details.quantity}</p>
                <button
                    id={details.item.id}
                    onClick={handleRemove} 
                    className='btn btn-outline-danger'
                >Remover</button>
            </div>
        </div>
    )
}

export default ItemInCart