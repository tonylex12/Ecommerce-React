import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
//Context
import {StoreContext} from '../../context/StoreContext'
//Components
import ItemList from '../itemList/ItemList'
import Loading from '../loading/Loading'
//SCSS
import './itemListContainer.scss';



const ItemListContainer = () => {

    const {data, loading} = useContext(StoreContext)
    const {id} = useParams()
    

    return(
        <div className="products-container">
            { loading ? 
                <Loading /> 
                : data.map((product)=>{ 
                    return( id ? 
                        product.category === id ?
                        <ItemList
                            key={product.id}
                            item={{
                                id: product.id,
                                name: product.name,
                                pictureUrl: product.pictureUrl,
                                price: product.price,
                                stock:product.stock
                            }}
                        /> 
                        : null 
                    : <ItemList 
                        key={product.id}
                        item={{
                            id: product.id,
                            name: product.name,
                            pictureUrl: product.pictureUrl,
                            price: product.price,
                            stock:product.stock
                        }}
                    />)
                })
            }
        </div>
    )
}

export default ItemListContainer;