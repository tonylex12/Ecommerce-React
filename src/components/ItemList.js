import React, { useState, useEffect } from "react"
import Item from "./Item"

const ItemList = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = fetch('./data/data.json')
        fetchData
        .then((getData) => {
            if (getData.status === 200 ) {
                return getData.json()
            }
        })
        .then((getData)=>{
            setTimeout(() => {
                setData(getData)
            }, 2000);
        })
    }, [])

    return (
        <>
            { data.map((product) => {
                return(
                    <Item
                        key={product.id}
                        title={product.name}
                        pictureUrl={product.pictureUrl}
                        stock={product.stock}
                    />
                )
            })}
        </>
    )
}

export default ItemList