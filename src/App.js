import React, { useEffect } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import StoreProvider from './context/StoreContext'
import AppNavBar from "./components/navbar/AppNavBar"
import Main from "./components/main/Main"
import AppFooter from './components/footer/Footer'

const App = () => {

    useEffect(() => {
        
    }, [])

    return(
        <Router>
            <StoreProvider>
                <AppNavBar />
                <Main className="mb-0"/>
                <AppFooter
                    copy="&copy; Copyright 2021"
                />
            </StoreProvider>
        </Router>
    )
}

export default App