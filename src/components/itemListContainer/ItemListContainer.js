import React, { useContext, useState, useEffect } from 'react'
import {getFirestore} from '../../firebase'
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

    let [categoryQuery, setCategoryQuery] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = db.collection('data')
        if (id) {
            var query = itemsCollection.where("category", "==", id);
            query.get()
            .then((querySnapshot)=>{
                setCategoryQuery([])
                querySnapshot.forEach(function(doc) {
                    const categoryQueryRes = doc.data()
                    setCategoryQuery(categoryQuery => [...categoryQuery, categoryQueryRes])
                });
            })
        }
        
    }, [id])
    useEffect(() => {
        console.log('Cambio en State CategoryQuery => ', categoryQuery)
    }, [categoryQuery])

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
                                description: product.description,
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
                            description: product.description,
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
