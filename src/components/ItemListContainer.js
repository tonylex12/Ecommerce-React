import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList"
import "../../src/Style.scss"

const ItemListContainer = () => {

    const [data, setData] = useState([])

    const params = useParams()

    useEffect(()=>{
        const fetchData = fetch('../data/data.json')
        fetchData
        .then((getData) => {
            if (getData.status === 200 ) {
                return getData.json()
            }
        })
        .then((getData)=>{
            setTimeout(() => {
                setData(getData)
                /* if () */
            }, 500);
        })
    }, [])

    return(
        <div className="products-container">
             { data.map((e)=>{ 
                    return( 
                        Object.keys(params).length ? 
                            e.category === params.category ?
                            <ItemList 
                                key={e.id}
                                id={e.id} 
                                name={e.name}   
                                pictureUrl={e.pictureUrl} 
                                stock={e.stock} 
                                price={e.price} 
                                
                            />: null :
                            <ItemList 
                                key={e.id}
                                id={e.id} 
                                name={e.name}   
                                pictureUrl={e.pictureUrl} 
                                stock={e.stock} 
                                price={e.price} 
                            />
                    )
                })
            }
        </div>
    )
}

export default ItemListContainer