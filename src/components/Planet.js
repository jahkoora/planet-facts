import React, { useState } from "react"
import { motion } from "framer-motion"

export default function Planet({ activePlanet }) {
  const {
    name,
    overview,
    images,
    geology,
    radius,
    revolution,
    rotation,
    structure,
    temperature,
  } = activePlanet

  const tabs = [
    {
      data: "overview",
      text: "Overview",
      mobile: "Overview",
    },
    {
      data: "structure",
      text: "Internal Structure",
      mobile: "Structure",
    },
    {
      data: "geology",
      text: "Surface Geology",
      mobile: "Geology",
    },
  ]

  const [submenuTabs, setSubmenuTabs] = useState("overview")
  const [isActive, setActive] = useState(0)

  function handleSubmenuTab(tab, index) {
    setSubmenuTabs(tab.data)
    setActive(index)
  }

  // animations

  function setActivePlanetContent() {
    if (submenuTabs === "overview") {
      return (
        <>
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 0.5 },
            }}
            className="image-container">
            <img
              src={images[submenuTabs]}
              alt={`svg of the planet ${name}`}
            />
          </motion.div>
          <div className="planet-info">
            <h1>{name}</h1>
            <p>{overview.content}</p>
            <p>
              Source:{" "}
              <a href={overview.source}>
                Wikipedia
                <img
                  src="./images/icon-source.svg"
                  alt="source-icon"
                />
              </a>
            </p>
          </div>
        </>
      )
    } else if (submenuTabs === "structure") {
      return (
        <>
          <motion.div
            animate={{
              rotate: 180,
              transition: { duration: 0.5 },
            }}
            className="image-container">
            <img
              src={process.env.PUBLIC_URL + images[submenuTabs]}
              alt={`svg of the planet ${name}`}
            />
          </motion.div>
          <div className="planet-info">
            <h1>{name}</h1>
            <p>{structure.content}</p>
            <p>
              Source:{" "}
              <a href={structure.source}>
                Wikipedia
                <img
                  src="./images/icon-source.svg"
                  alt="source-icon"
                />
              </a>
            </p>
          </div>
        </>
      )
    } else if (submenuTabs === "geology") {
      return (
        <>
          <div className="image-container">
            <motion.img
              animate={{
                rotate: 360,
                transition: { duration: 0.5 },
              }}
              src={images.overview}
              alt={`svg of the planet ${name}`}
            />
            <motion.img
              animate={{
                opacity: 1,
                transition: { delay: 1 },
              }}
              className="geology-img"
              src={images[submenuTabs]}
              alt={`svg of the planet ${name}`}
            />
          </div>
          <div className="planet-info">
            <h1>{name}</h1>
            <p>{geology.content}</p>
            <p>
              Source:{" "}
              <a href={geology.source}>
                Wikipedia
                <img
                  src="./images/icon-source.svg"
                  alt="source-icon"
                />
              </a>
            </p>
          </div>
        </>
      )
    }
  }

  const activePlanetContent = setActivePlanetContent()

  return (
    <>
      <main>
        <article className="planet-article">
          <>{activePlanetContent}</>
          <div className="submenu">
            {tabs.map((tab, index) => {
              return (
                <button
                  className={
                    isActive === index
                      ? `active ${activePlanet.name.toLowerCase()}`
                      : null
                  }
                  key={index}
                  onClick={() => handleSubmenuTab(tab, index)}>
                  <span>{index + 1}</span>
                  {tab.text}
                </button>
              )
            })}
          </div>
        </article>
      </main>
      <footer>
        <div className="planet-stats">
          <h3>Rotation Time</h3>
          <p className="planet-stats-text">{rotation}</p>
        </div>
        <div className="planet-stats">
          <h3>Revolution Time</h3>
          <p className="planet-stats-text">{revolution}</p>
        </div>
        <div className="planet-stats">
          <h3>Radius</h3>
          <p className="planet-stats-text">{radius}</p>
        </div>
        <div className="planet-stats">
          <h3>Average Temp.</h3>
          <p className="planet-stats-text">{temperature}</p>
        </div>
      </footer>
    </>
  )
}
