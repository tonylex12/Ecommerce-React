
import React from 'react'
import { Link } from 'react-router-dom'
import './emptyCart.scss'

const EmptyCart = () => {
    return (
        <div className='cart_empty'>
            <h2>Carrito vacío</h2>
            <Link className='btn btn-primary' to='/'>Añadir un producto</Link>
        </div>
    )
}

export default EmptyCart