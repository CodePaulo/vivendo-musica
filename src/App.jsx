import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/main/header";
import RoutesApp from "./Routes";
import Nav from "./components/main/Nav";
import MenuContext from "./Context/MenuContext";
import NavHeaderContext from "./Context/NavHeaderContext";
import DataUserContext from "./Context/DataUserContext";

const statsMenu = localStorage.getItem("statsMenu") === "true"
const urlActual = window.location.href.split("/")[window.location.href.split("/").length - 1]

function App() {
  const [openMenu, setOpenMenu] = useState(statsMenu)
  const handleMenu = open => {
    setOpenMenu(open)
    localStorage.setItem('statsMenu', open)
  }
  const [optionSelected, setOptionSelected] = useState(urlActual)
  const handleOptions = (option) => setOptionSelected(option)

  return (
    <BrowserRouter>
      <div className="App">
          <NavHeaderContext.Provider value={[optionSelected, handleOptions]}>
            <MenuContext.Provider value={[openMenu, handleMenu]}>
              <Nav />
              <Header />
            </MenuContext.Provider>
            <RoutesApp />
          </NavHeaderContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
