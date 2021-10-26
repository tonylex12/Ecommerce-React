import React, { useContext, useState, useEffect } from 'react'
import {getFirestore} from '../../firebase'
import { useParams } from 'react-router-dom'
//Context
import { StoreContext } from '../../context/StoreContext'
//Components
import ItemDetail from '../itemDetail/ItemDetail'
import Loading from '../loading/Loading'
//CSS
import './itemDetailsContainer.scss'

const ItemDetailContainer = () => {

    const { data } = useContext(StoreContext)
    const [product, setProduct] = useState()
    const params = useParams()
    /* const [data, setData] = useState([]) */

    /* useEffect(() => {
        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const query = itemsCollection.doc(params.id)
        query.get()
        .then((querySnapshot)=>{
            if (!querySnapshot.exists) {
                console.log('noexiste')
            } else {
                const dataRes = querySnapshot.data()
                setLoading(false)
                setData(data => [...data, dataRes])
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, []) */

    useEffect(() => {
        setProduct(data.find(p => params.id === p.id))
    }, [params.id, data])

    return(
        <div className="itemDetailContainer">
            { product ? 
                    <ItemDetail 
                        item={{
                            id: product.id,
                            name : product.name,
                            pictureUrl : product.pictureUrl,
                            category : product.category,
                            description : product.description,
                            price : product.price,
                            currentStock : product.stock,
                            specs: product.specifications
                        }}
                    />
                    : <Loading />
            }
        </div>
    )
}

export default ItemDetailContainer