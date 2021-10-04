import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Item = ({title, stock, price, description, pictureUrl}) => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Img
                    variant="top"
                    src={pictureUrl} 
                />
                <Button>Ver detalle del producto</Button>
                <Card.Text>
                    Disponibles: {stock}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item