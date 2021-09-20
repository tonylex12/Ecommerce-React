import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import "../../src/Style.scss"

const CartWidget = () => {
    return(
        <button className="cart">
            <FaShoppingCart size="30"/>
            <span>0</span>
        </button>
    )
}

export default CartWidget