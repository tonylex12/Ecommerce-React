
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import Cart from '../cart/Cart'

const Main = () => {
    return (
        <div className="detail-container">
            <Switch>
                <Route component={ItemListContainer} path="/" exact />
                <Route component={ItemListContainer} path="/categorias/:id" />
                <Route component={ItemListContainer} path="/search/:input" />
                <Route component={ItemDetailContainer} path="/producto/:id" />
                <Route component={Cart} path="/cart" />
            </Switch>
        </div>
    )
}

export default Main