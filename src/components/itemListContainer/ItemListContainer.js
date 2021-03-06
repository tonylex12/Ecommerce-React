import React, { useContext } from 'react';
import { getFirestore } from '../../firebase'
import { useParams } from 'react-router-dom'
//Context
import { StoreContext } from '../../context/StoreContext'
//Components
import ItemList from '../itemList/ItemList'
import Loading from '../loading/Loading'
//SCSS
import './itemListContainer.scss';

const ItemListContainer = () => {

    const { loading, data } = useContext(StoreContext)
    //const [data, setData] = useState([])
    const params = useParams()
    const { id, input } = useParams()

    /* useEffect(() => {
        
        setData([])
        const db = getFirestore()
        const itemsCollection = db.collection('items')
        if (id) {
            const query = itemsCollection.where("category", "==", id);
            query.get()
            .then((querySnapshot)=>{
                querySnapshot.forEach(function(doc) {
                    const dataRes = doc.data()
                    setData(data => [...data, dataRes])
                });
            })
        } else {
            itemsCollection.get()
            .then((querySnapshot)=> {
                querySnapshot.forEach(function(doc) {
                    const dataRes = doc.data()
                    setData(data => [...data, dataRes])
                });
            })
        }
        setLoading(false)
    }, [id]) */

    

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
                    : input ?
                        (product.name.toUpperCase().indexOf(input) > -1)
                        ||
                        (product.description.toUpperCase().indexOf(input) > -1) ?
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
                    />
                    )
                    
                })
            }
        </div>
    )
}

export default ItemListContainer;