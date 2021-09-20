import React from "react"
import "../../src/Style.scss"

const ItemListContainer = (props) => {
    return(
        <main className="products-container">{props.greeting} a LEXTEC</main>
    )
}

export default ItemListContainer