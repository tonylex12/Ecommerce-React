import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"

const ItemCount = ({initial, stock}) => {
    let [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) setCount(++count)
    }

    const decrement = () => {
        if (count > 0) setCount(--count)
    }

    return(
        <div className="count-container">
            <Button 
                onClick={decrement}
                disabled={count === initial}
            >
                <FaMinus size={5}/>
            </Button>
            <p>{count}</p>
            <Button 
                onClick={increment}
                disabled={count === stock}
            >
                <FaPlus size={5}/>
            </Button>
        </div>
    )
}

export default ItemCount