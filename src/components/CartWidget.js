import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import "../../src/Style.scss"

const CartWidget = (props) => {
    return(
        <button className="cart">
            <FaShoppingCart size="30"/>
            <span>{props.items}</span>
        </button>
    )
}

export default CartWidget