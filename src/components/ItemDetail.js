import React from "react"
import Button from "react-bootstrap/Button"

const ItemDetail = ( { name, category, description, price, pictureUrl, id }) => {
    return (
        <>
            <img alt = "" src={pictureUrl} />
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{description}</p>
            <p>$ {price}</p>
            <Button href="../..">Volver</Button>
        </>
    )
}

export default ItemDetail