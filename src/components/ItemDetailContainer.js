import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import "../../src/Style.scss"

const ItemDetailContainer = () => {

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
            }, 600);
        })

        
    }, [])
    
    return(
        <div className="details">
            { data.map((e) => {
                    return(
                        e.id === params.id ? 
                        <ItemDetail
                            key={e.id}
                            name={e.name} 
                            pictureUrl={e.pictureUrl}
                            category={e.category}
                            description={e.description} 
                            price={e.price} 
                        /> :
                        null
                    )
                })
            }
        </div>
    )

}

export default ItemDetailContainer