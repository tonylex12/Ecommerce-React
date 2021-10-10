import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
//Context
import {StoreContext} from '../../context/StoreContext'
//Components
import ItemCount from '../itemCount/ItemCount'
//SCSS
import './itemDetail.scss'



const ItemDetail = ({item}) => {

    const {name, pictureUrl, description, price, currentStock, id} = item

    const { 
        added, 
        initial, 
        stock, 
        setStock, 
        setCount, 
        setToggleItem,
        toggleItem
    } = useContext(StoreContext)

    useEffect(() => {
        setStock(currentStock)
        setCount(initial)
        setToggleItem(!toggleItem)
    }, [])


    return(
        <>
            <h3>{name}</h3>
            <div className="detailOverview">
                <img alt={id} src={pictureUrl} />
                <div className="detailsDescription">
                    <h1>{name}</h1>
                    <h3>$ {price}</h3>
                    <p className="stock">Disponibles: {stock}</p>
                    {added ?
                        <div className='itemAdded'>
                            <Link 
                                className='btn btn-primary'
                                to={`/cart`}
                                /* onClick={newItem} */
                            >Finalizar compra</Link>
                            <Link
                                className='btn btn-outline-primary'
                                to={`/`}
                            >
                                Seguir comprando
                            </Link>
                        </div>
                        : <ItemCount 
                            currentStock={currentStock}
                            item={{
                                id:id,
                                name: name,
                                price:price,
                                pictureUrl:pictureUrl
                            }}
                        />
                    }

                </div>
            </div>
        </>
    )
}

export default ItemDetail