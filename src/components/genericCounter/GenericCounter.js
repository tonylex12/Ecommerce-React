import React from 'react'
//BOOTSTRAP
import Button from "react-bootstrap/Button";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const GenericCounter = ({onIncrementAction, onDecrementAction, affectedValue, disableIncrement, disableDecrement }) => {
    return (
        <div className="counter">
                <Button 
                    onClick={onDecrementAction}
                    disabled={disableDecrement}
                    variant="outline-secondary" 
                >
                    <FaMinus size={20} />
                </Button>
                <p>{affectedValue}</p>
                <Button 
                    onClick={onIncrementAction} 
                    disabled={disableIncrement} 
                    variant="outline-secondary">
                    <FaPlus size={20} />
                </Button>
            </div>
    )
}

export default GenericCounter