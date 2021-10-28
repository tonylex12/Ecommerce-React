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

    const {loading, setLoading/* , data */} = useContext(StoreContext)
    const [data, setData] = useState([])
    const params = useParams()

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = db.collection('data')
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
    }, [])

    return(
        <div className="itemDetailContainer">
            { loading ? 
                <Loading /> : 
                data.map((product)=>{
                    return(<ItemDetail 
                        key={product.id}
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
                    />)
                })
            }
        </div>
    )
}

export default ItemDetailContainer