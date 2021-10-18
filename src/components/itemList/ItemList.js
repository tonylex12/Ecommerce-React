
import React from 'react'
import { Link } from 'react-router-dom'
//BOOTSTRAP
import Card from "react-bootstrap/Card";
//SCSS
import './itemList.scss'

const ItemList = ({item}) => {
    const {id, description, name, price, pictureUrl} = item

    return(
        <Card>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    $ {price}
                </Card.Text>
                <Link 
                    className="addToCart btn btn-primary" 
                    to={`/producto/${id}`}
                    >Detalle</Link>
            </Card.Body>
        </Card>
    )
}

export default ItemList