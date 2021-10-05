import React from "react"
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Counter from "./ItemCount"

const ItemList = ({name, stock, price, pictureUrl, id}) => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Img
                    variant="top"
                    src={pictureUrl} 
                />
                <Link to={`/producto/${id}`}>Ver detalle del producto</Link>
                <Card.Text>
                    ${price}
                </Card.Text>
                <Counter
                    initial={1}
                    stock={stock} 
                />
                <Card.Text>
                    Disponibles: {stock}
                </Card.Text>
                <Button>Añadir al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemList