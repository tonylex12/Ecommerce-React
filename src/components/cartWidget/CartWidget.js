import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {StoreContext} from '../../context/StoreContext'
import './cartWidget.scss';

const CartWidget = () => {

    const {totalQuantity} = useContext(StoreContext)

    return(
        <>

        {totalQuantity === 0 ? 
        null
        : <Link to='/cart'>
        <div className="cartWidget">
            <p>{totalQuantity}</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 521.3 596.4"
                version="1.1"
                viewBox="0 0 521.3 596.4"
                xmlSpace="preserve"
            >
            <g className="cartInner">
                <path
                    d="M86.6 260.1L114 381.9h45l-17.4-121.7-55-.1z"
                    className="cartInner_left"
                ></path>
                <path
                    d="M188.2 260.1l17.4 121.7h34L257 260.1h-68.8z"
                    className="cartInner_center"
                ></path>
                <path
                    d="M286.2 381.9H334l24.6-121.7h-55l-17.4 121.7z"
                    className="cartInner_right"
                ></path>
            </g>
            <path
                d="M30.8 213.1c-1.9 2.2-2.7 5.2-2.2 8.1l28.1 169.4c4 24.3 24.8 41.9 49.4 41.9h253.6l-3.6 17.9H98.4c-5.5 0-10 4.5-10 10 0 4.7 3.2 8.6 7.5 9.7-4.7 7-7.5 15.5-7.5 24.6 0 24.4 19.9 44.3 44.3 44.3s44.3-19.9 44.3-44.3c0-9-2.7-17.3-7.3-24.3h138.7c-4.6 7-7.3 15.3-7.3 24.3 0 24.4 19.9 44.3 44.3 44.3s44.3-19.9 44.3-44.3c0-13.4-5.9-25.4-15.3-33.5l60.8-300.9h57.1c5.5 0 10-4.5 10-10s-4.5-10-10-10H427c-4.8 0-8.9 3.4-9.8 8l-12.4 61.3H38.4c-2.9 0-5.7 1.3-7.6 3.5zm314.5 257.2c13.4 0 24.3 10.9 24.3 24.3S358.7 519 345.3 519 321 508.1 321 494.7s10.9-24.4 24.3-24.4zm-236.9 24.4c0-13.4 10.9-24.3 24.3-24.3s24.3 10.9 24.3 24.3-10.9 24.3-24.3 24.3-24.3-10.9-24.3-24.3zM50.2 229.6h350.4l-36.9 182.9H106.1c-14.8 0-27.3-10.6-29.7-25.2L50.2 229.6z"
                className="st0"
                ></path>
            <g className="cruz">
                <path
                    d="M299.1 324.1c0-42.2-34.3-76.4-76.4-76.4s-76.5 34.3-76.5 76.4 34.3 76.4 76.5 76.4 76.4-34.3 76.4-76.4zm-20 0c0 31.1-25.3 56.4-56.4 56.4s-56.5-25.3-56.5-56.4 25.3-56.4 56.5-56.4c31-.1 56.4 25.2 56.4 56.4z"
                    className="cruzCirculo"
                ></path>
                <path
                    d="M247.6 349c3.9-3.9 3.9-10.2 0-14.1l-10.8-10.8 10.8-10.8c3.9-3.9 3.9-10.2 0-14.1s-10.2-3.9-14.1 0L222.7 310l-10.8-10.8c-3.9-3.9-10.2-3.9-14.1 0s-3.9 10.2 0 14.1l10.8 10.8-10.8 10.8c-3.9 3.9-3.9 10.2 0 14.1 2 2 4.5 2.9 7.1 2.9s5.1-1 7.1-2.9l10.8-10.8 10.8 10.8c2 2 4.5 2.9 7.1 2.9s4.9-.9 6.9-2.9z"
                    className="cruzCruz"
                ></path>
            </g>
        </svg>
        </div>
        </Link>}

        </>
    )
}

export default CartWidget;