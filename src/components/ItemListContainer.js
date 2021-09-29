import React from "react"
import ItemList from "./ItemList"
import "../../src/Style.scss"

const ItemListContainer = () => {
    return(
        <main>
            <div className="products-container">
                <ItemList />
            </div>
        </main>
    )
}

export default ItemListContainer