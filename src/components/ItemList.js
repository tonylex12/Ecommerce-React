import React, { useState, useEffect } from "react"
import Item from "./Item"

const dataList = [
    {
        id: 'msigf63',
        title: 'MSI GF63',
        description: '512 GB SSD, 8GB RAM, NVIDIA 1060X',
        price: 1400,
        pictureUrl: 'img/msigf63.png',
        stock: 14
    },
    {
        id: 'hp14',
        title: 'HP 14',
        description: '256 GB SSD, 4GB RAM, NVIDIA 840',
        price: 1200,
        pictureUrl: 'img/hp14.png',
        stock: 6
    },
    {
        id: 'modern14',
        title: 'MODERN 14',
        description: '1 TB SSD, 16GB RAM, NVIDIA 1080X',
        price: 1600,
        pictureUrl: 'img/modern14.png',
        stock: 11
    }
]

const ItemList = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = new Promise((res, rej) => {
            res(dataList)
        })
        fetchData.then((getData) => {
            setTimeout(() => {
                setData(getData)
            }, 2000)
        })
    }, [data])

    return (
        <>
            { data === [] ? null : data.map((product,i) => {
                return(
                    <Item
                        key={product.id}
                        title={product.title}
                        stock={product.stock}
                        price={product.price}
                        description={product.description}
                        pictureUrl={product.pictureUrl}
                    />
                )
            })}
        </>
    )
}

export default ItemList