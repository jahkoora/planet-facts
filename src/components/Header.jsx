import React, { useState, useRef } from "react";
import useWindowDimensions from "../helpers/useWindowDimensions";

export default function Header({
  planets,
  handleActivePlanet,
  menuState,
  setMenuState,
}) {
  const [selectedPlanet, setSelectedPlanet] = useState("mercury"); // eslint-disable-line
  const [planetIsActive, setPlanetIsActive] = useState("mercury");
  const navlist = useRef("");
  const hamburgerIcon = useRef("");
  const { height, width } = useWindowDimensions();

  function handleSelectedPlanet(planet, index) {
    handleActivePlanet(planet, index);
    setSelectedPlanet(planet.name);
    setPlanetIsActive(planet.name.toLowerCase());
    setMenuState(!menuState);
  }

  if (menuState === true) {
    navlist.current.style.left = "0";
    hamburgerIcon.current.style.fill = "rgba(255,255,255,0.2)";
    document.querySelector("body").style.overflowY = "hidden";
  } else if (menuState === false) {
    navlist.current.style.left = "100vw";
    hamburgerIcon.current.style.fill = "rgba(255,255,255)";
    document.querySelector("body").style.overflowY = "visible";
  }

  const isMobile = width < 640;

  return (
    <header>
      <nav>
        <span className="logo">THE PLANETS</span>
        <ul
          className="nav-list"
          ref={navlist}
          style={{ height: isMobile ? height - 140 : "" }}>
          {planets.map((planet, index) => {
            return (
              <li
                className={`
                    nav-link ${planet.name.toLowerCase()} ${
                  planetIsActive === planet.name.toLowerCase()
                    ? "active"
                    : ""
                }`}
                key={index}>
                <a
                  href="#"
                  onClick={() => handleSelectedPlanet(planet, index)}>
                  {planet.name}
                  <span className="chevron"></span>
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className={`hamburger mobile ${
            menuState ? "menu-close" : ""
          }`}
          onClick={() => setMenuState(!menuState)}>
          {/* <img src="images/icon-hamburger.svg" alt="mobile menu button"/> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="17">
            <g ref={hamburgerIcon} fill="#FFF" fill-rule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </button>
      </nav>
    </header>
  );
}
