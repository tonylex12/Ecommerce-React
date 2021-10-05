import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppNavBar from "./components/AppNavBar"
import Main from "./components/Main"

function App() {
  return (
    <BrowserRouter>
      <AppNavBar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
