import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext'
//BOOTSTRAP
import {Button} from 'react-bootstrap'
//components
import Form from '../form/Form'


const CartTotal = () => {

    const { cart, handleTotal, handleClearAll } 
        = useContext(StoreContext)


    return (
        <div className='cart_total_wrapper'> 
            <div className='cart_total'>
                <h2>Total: $ {handleTotal()}</h2>
                { cart.length === 0 ?
                    null
                    : <div className='cart_total_form'>
                        <Form />
                        <Button variant="outline-danger" onClick={ handleClearAll } >
                            Borrar todo
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default CartTotal