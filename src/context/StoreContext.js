import React, {createContext, useState, useEffect} from 'react'

export const StoreContext = createContext()
const { Provider } = StoreContext

const StoreProvider = ({children}) => {

    //DATA
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = fetch('../data/data.json')
        fetchData
        .then((getData) => {
            if (getData.status === 200 ) {
                return getData.json()
            }
        })
        .then((getData)=>{
            setTimeout(() => {
                setData(getData)
                setLoading(false)
            }, 600);
        })
    }, [])

    //Counter
    const initial = 0
    let [toggleItem, setToggleItem] = useState(false)
    let [stock, setStock] = useState()
    let [count, setCount] = useState(initial)
    let [added, setAdded] = useState(false)
    let [totalQuantity, setTotalQuantity] = useState(0)
    let [cart, setCart] = useState([])

    useEffect(()=>{
        setAdded(false)
    },[toggleItem])

    const handleIncrement = () => {
        if (count < stock) {
            setCount(++count);
        }
    }
    const handleDecrement = () => {
        if (count > initial) {
            setCount(--count)
        };
    }

    const handleRemove = (e) => {
        const itemDeleted = cart.filter(function(value, index, arr){
            if (value.id !== e.target.id) {
                return arr 
            }
        })
        setCart(itemDeleted)
        setTotalQuantity(totalQuantity - 1)
    }

    return(
        <Provider 
            value={{
                /*Global Data*/
                data: data,
                loading: loading,
                setLoading:setLoading,
                /*Item Detail Data*/
                toggleItem:toggleItem,
                setToggleItem:setToggleItem,
                initial: initial,
                stock: stock,
                setStock: setStock,
                count:count,
                setCount:setCount,
                /*Count Data*/
                handleIncrement: handleIncrement,
                handleDecrement: handleDecrement,
                added:added,
                setAdded:setAdded,
                //Cart Data
                setCart:setCart,
                cart: cart,
                handleRemove:handleRemove,
                //CartWidget Data
                totalQuantity:totalQuantity,
                setTotalQuantity:setTotalQuantity
            }}
        >
            {children}
        </Provider>
    )
}

export default StoreProvider