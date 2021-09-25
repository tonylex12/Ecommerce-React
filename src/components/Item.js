import React from "react"
import ItemCount  from "./ItemCount"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Item = ({nombre, initial, stock}) => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <ItemCount initial={initial} stock={stock}/>
                <Button>Añadir al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Item