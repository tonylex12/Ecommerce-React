import React from "react"
import Item from "./Item"
import "../../src/Style.scss"

const ItemListContainer = () => {
    return(
        <main>
            <div className="products-container">
                <Item nombre="MSI GF63" initial="1" stock ="10"/>
                <Item nombre="DELL XP15" initial="1" stock ="5"/>
                <Item nombre="HP 15" initial="1" stock ="5"/>
                <Item nombre="MACKBOOK" initial="1" stock ="5"/>
            </div>
        </main>
    )
}

export default ItemListContainer