import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
//Bootstrap
import Table from 'react-bootstrap/Table'
import './newPurchase.scss'

const NewPurchase = () => {

    const { newPurchase } = useContext(StoreContext)

    return (
        <div className='container container_new_purchase'>
            <h2>¡Tu compra se proceso con exito!</h2>
            <div className='new_purchase'>
                
                <div className='new_purchase_info'>
                    <h4>Gracias {newPurchase.buyer.name} por confiar en nosotros</h4>
                    <div className='new_purchase_info_id'>
                        <p>Id de la compra: </p> 
                        <p className='new_purchase_info_id'>
                            { newPurchase.id ?
                                newPurchase.id
                                : 'obteniendo id...'
                            }
                        </p>
                    </div>
                    <p>Conserva este número para realizar el seguimiento</p>
                </div>
                <div className='new_purchase_items'>
                    <Table striped responsive hover variant="dark">
                        <thead>
                            <tr>
                                <td colSpan='4'><h3>Productos</h3></td>
                            </tr>
                        </thead>
                        <tbody>
                            {newPurchase.items.map( item => {
                                return(
                                    <tr key={item.id}>
                                        <td>{item.item.name}</td>
                                        <td>${item.item.price}</td>
                                        <td>x{item.quantity}</td>
                                        <td>${item.totalPrice}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan='3'><h5>Total: </h5></td>
                                <td colSpan='1'>${newPurchase.total}</td>
                            </tr>
                        </tbody>
                    </Table>
                    
                    
                </div>
            </div>
            <Link className='btn btn-primary' to='/'>Seguir comprando</Link>
        </div>
        
    )
}

export default NewPurchase