import React, { useContext, useState, useEffect} from 'react'
import {getFirestore} from '../../firebase'
import {useParams} from 'react-router-dom'
//Context
import {StoreContext} from '../../context/StoreContext'
//Components
import ItemDetail from '../itemDetail/ItemDetail'
import Loading from '../loading/Loading'
//CSS
import './itemDetailsContainer.scss'

const ItemDetailContainer = () => {

    const {loading, data} = useContext(StoreContext)
    const params = useParams()

    const [realTimePrice, setRealTimePrice] = useState()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = db.collection('data')
        const query = itemsCollection.doc(params.id)
        query.get()
        .then((querySnapshot)=>{
            if (!querySnapshot.exists) {
                console.log('noexiste')
            } else {
                const price = querySnapshot.data()
                setRealTimePrice(price.price)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <div className="itemDetailContainer">
            { loading ? 
                <Loading /> : 
                data.map((product)=>{
                    return(
                        product.id === params.id ? 
                        <ItemDetail 
                            key={product.id}
                            item={{
                                    id: product.id,
                                    name : product.name,
                                    pictureUrl : product.pictureUrl,
                                    category : product.category,
                                    description : product.description,
                                    price : realTimePrice,
                                    currentStock : product.stock,
                                    specs: product.specifications,
                                    params: params.id
                                }}
                        /> 
                        : null
                    )
                })
            }
        </div>
    )
}

export default ItemDetailContainer
