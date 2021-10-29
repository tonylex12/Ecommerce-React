import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
//Context
import {StoreContext} from '../../context/StoreContext'
//Components
import ItemCount from '../itemCount/ItemCount'
import ItemSpecs from '../itemSpecs/ItemSpecs'
//SCSS
import './itemDetail.scss'



const ItemDetail = ({item}) => {

    const {name, pictureUrl, price, currentStock, id, specs} = item

    const { 
        added, 
        setAdded, 
        stock, 
        setStock, 
        dispatchCount,
    } = useContext(StoreContext)

    useEffect(() => {
        dispatchCount('COUNTER_RESET')
        setStock(currentStock)
        setAdded(false)
    }, [])


    return(
        <>
            <div className="detailOverview mt-5 mb-1">
                <img alt={id} src={pictureUrl} />
                <div className="detailsDescription">
                    <h3>{name}</h3>
                    <h2>$ {price}</h2>
                    <p>Disponibles: {stock}</p>
                    {added ?
                        <div className='itemAdded'>
                            <Link 
                                className='btn btn-primary'
                                to={`/cart`}
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
                                pictureUrl:pictureUrl,
                                stock:stock
                            }}
                        />
                    }
                </div>
            </div>
            <ItemSpecs specs={specs} />
        </>
    )
}

export default ItemDetail