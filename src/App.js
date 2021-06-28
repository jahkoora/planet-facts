import React, { useState } from "react";

import Header from "./components/Header";
import Planet from "./components/Planet";
import data from "./data.json";
import "./App.css";

export default function App() {
  const [activePlanet, setActivePlanet] = useState(data[0]);
  const [menuState, setMenuState] = useState(null);

  function handleActivePlanet(planet, index) {
    return setActivePlanet(data[index]);
  }

  return (
    <>
      <Header
        planets={data}
        menuState={menuState}
        setMenuState={setMenuState}
        handleActivePlanet={handleActivePlanet}
        activePlanet={activePlanet}
      />
      <Planet activePlanet={activePlanet} />
    </>
  );
}
