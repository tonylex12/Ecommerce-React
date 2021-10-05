
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';


const Main = () => {
    return (
        <div className="detail-container">
            <Switch>
                <Route exact path="/">
                    <ItemListContainer />
                </Route>
                <Route path="/categorias/:category">
                    <ItemListContainer />
                </Route>
                <Route path="/producto/:id">
                    <ItemDetailContainer />
                </Route>
            </Switch>
            
        </div>
    )
}

export default Main