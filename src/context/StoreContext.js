import React, {createContext, useState, useEffect, useCallback, useReducer} from 'react'

export const StoreContext = createContext()
const { Provider } = StoreContext

export const counterInitialState = 0

const counterReducer = (state, action) => {
    switch (action) {
        case 'COUNTER_INCREMENT':
            return state + 1
        case 'COUNTER_DECREMENT':
            return state - 1
        case 'COUNTER_RESET' :
            return counterInitialState
        default:
            return state
    }
}

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
    const [counterCount, dispatchCount] = useReducer(counterReducer, counterInitialState)
    
    let [stock, setStock] = useState()
    let [added, setAdded] = useState(false)
    let [totalQuantity, setTotalQuantity] = useState(0)
    let [cart, setCart] = useState([])

    const handleAddToStock = (id, quantity) => {
        const newData = data
        const objIndex =  newData.findIndex((obj => obj.id === id))
        newData[objIndex].stock = newData[objIndex].stock  + quantity
    }
    const handleRemoveFromStock = (producto) => {
        const newData = data
        const objIndex = newData.findIndex((obj => obj.id === producto.id));
        newData[objIndex].stock = stock - counterCount
        setData(newData)
    }

    const handleDuplicates = (targetId, product, countInsideTheLoop) => {
        const isAlreadyInCart = cart.filter( cart => cart.id === targetId)
        console.log(isAlreadyInCart)
        if (isAlreadyInCart.length === 0) {
            console.log(product)
            const newProduct = {id: product.id, item: product, quantity: countInsideTheLoop}
            setCart(cart => [...cart, newProduct])
            setStock(stock - counterCount);
            setTotalQuantity(totalQuantity + 1);
            handleRemoveFromStock(product)
        } else {
            const newCart = cart
            const objIndex = newCart.findIndex((obj => obj.id === targetId))
            newCart[objIndex].quantity = newCart[objIndex].quantity + countInsideTheLoop
            setCart(newCart)
            setStock(stock - counterCount);
            handleRemoveFromStock(product)
        }
    }

    const handleAdd = (e) => {
        setAdded(!added);
        for (const product of data) {
            const countInsideTheLoop = counterCount
            if (product.id === e.target.id && cart.length === 0) {
                const newProduct = {id:product.id,item:product,quantity:countInsideTheLoop}
                setCart(cart => [...cart, newProduct])
                setStock(stock - counterCount);
                setTotalQuantity(totalQuantity + 1);
                handleRemoveFromStock(product)
            } else if (product.id === e.target.id) {
                handleDuplicates(e.target.id, product, countInsideTheLoop)
                break 
            } 
        }
    }

    const handleRemove = (e) => {
        const itemDeleted = cart.filter(function(value, index, arr){
            if (value.id !== e.target.id) {
                return arr 
            }
        })
        for (const productsInCart of cart) {
            if (productsInCart.id === e.target.id) {
                handleAddToStock(e.target.id, productsInCart.quantity)
            }
        }
        console.log(itemDeleted)
        setCart(itemDeleted)
        setTotalQuantity(totalQuantity - 1)
    }

    return(
        <Provider 
            value={{
                //DATA
                data: data,
                loading: loading,
                stock: stock,
                setStock: setStock,
                added:added,
                setAdded:setAdded,
                handleAdd:handleAdd,
                setCart:setCart,
                cart: cart,
                handleRemove:handleRemove,
                totalQuantity:totalQuantity,
                counterCount:counterCount, 
                dispatchCount:dispatchCount
            }}
        >
            {children}
        </Provider>
    )
}

export default StoreProvider