import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import StoreProvider from './context/StoreContext'
import AppNavBar from "./components/navbar/AppNavBar"
import Main from "./components/main/Main"

const App = () => {
  return(
      <Router>
          <StoreProvider>
              <AppNavBar />
              <Main />
          </StoreProvider>
      </Router>
  )
}

export default App;