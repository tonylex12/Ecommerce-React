
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
//context
import {StoreContext} from '../../context/StoreContext'
//BOOTSTRAP
import Card from "react-bootstrap/Card";
//SCSS
import './itemList.scss'

const ItemList = ({item}) => {
    const {id, name, price, pictureUrl, stock} = item

    const {setStock} = useContext(StoreContext)

    const getStock = () => {
        setStock(stock)
        
    }

    return(
        <Card>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    $ {price}
                </Card.Text>
                <Link 
                    className="addToCart btn btn-primary" 
                    to={`/producto/${id}`}
                    onClick={getStock}
                    >Detalle</Link>
            </Card.Body>
        </Card>
    )
}

export default ItemList