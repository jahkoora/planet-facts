// mobile menu
const hamburgerBtn = document.getElementById("hamburger")
const hamburgerColor = document.getElementById("hamburger-color")
const hamburgerLines = document.getElementsByClassName("hamburger-lines")
const menuOverlay = document.getElementById("mobile-menu-overlay")
const navLinks = document.getElementsByClassName("nav-links")
const navLinksDesktop = document.getElementsByClassName("nav-links-desktop")

const mainContainer = document.getElementById("main-container")
const subMenu = document.querySelector(".sub-menu")
const wrapper2col = document.querySelector(".wrapper-2col")

hamburgerBtn.addEventListener("click", () => {
	if (menuOverlay.classList.contains("open")) {
		menuOverlay.classList.remove("open")
		hamburgerColor.style.fill = "#fff"
	} else {
		menuOverlay.classList.add("open")
		hamburgerColor.style.fill = "#37374e"
	}
})

function addActiveToDesktopLinks() {
	var current = location.pathname.split("/")[1]
	if (current === "") return
	for (var i = 0, len = navLinksDesktop.length; i < len; i++) {
		if (navLinksDesktop[i].getAttribute("href").indexOf(current) !== -1) {
			navLinksDesktop[i].classList.add("active")
		}
	}
}
addActiveToDesktopLinks()

const mobileViewPort = window.matchMedia("(max-width: 786px)")

if (mobileViewPort.matches) {
	console.log("mobileview")
	mainContainer.appendChild(subMenu)
} else {
	wrapper2col.appendChild(subMenu)
}

function moveSubMenuMobile() {
	if (mobileViewPort.matches) {
		console.log("mobileview")
		mainContainer.appendChild(subMenu)
	} else {
		wrapper2col.appendChild(subMenu)
	}
}

mobileViewPort.addListener(moveSubMenuMobile)
// sub menu links

const overviewLink = document.querySelector(".overview")
overviewLink.addEventListener("click", function () {
	document.querySelector(".structure").classList.remove("active")
	document.querySelector(".surface").classList.remove("active")
	document.querySelector(".overview").classList.add("active")
	getAllData("data.json", getData)
})
const structureLink = document.querySelector(".structure")
structureLink.addEventListener("click", function () {
	document.querySelector(".surface").classList.remove("active")
	document.querySelector(".overview").classList.remove("active")
	document.querySelector(".structure").classList.add("active")
	getAllData("data.json", getData)
})
const surfaceLink = document.querySelector(".surface")
surfaceLink.addEventListener("click", function () {
	document.querySelector(".overview").classList.remove("active")
	document.querySelector(".structure").classList.remove("active")
	document.querySelector(".surface").classList.add("active")
	getAllData("data.json", getData)
})

// get planets data from json file
function getAllData(url, cb) {
	fetch(url)
		.then((response) => response.json())
		.then((result) => cb(result))
}

function getData(planets) {
	planets.forEach((planet) => {
		if (planet.name === "Mercury" && document.URL.indexOf("index.html") >= 0) {
			renderMercury(planet)
		}
		if (planet.name === "Venus" && document.URL.indexOf("venus.html") >= 0) {
			renderVenus(planet)
		}
		if (planet.name === "Earth" && document.URL.indexOf("earth.html") >= 0) {
			renderEarth(planet)
		}
		if (planet.name === "Mars" && document.URL.indexOf("mars.html") >= 0) {
			renderMars(planet)
		}
		if (
			planet.name === "Jupiter" &&
			document.URL.indexOf("jupiter.html") >= 0
		) {
			renderJupiter(planet)
		}
		if (planet.name === "Saturn" && document.URL.indexOf("saturn.html") >= 0) {
			renderSaturn(planet)
		}
		if (planet.name === "Uranus" && document.URL.indexOf("uranus.html") >= 0) {
			renderUranus(planet)
		}
		if (
			planet.name === "Neptune" &&
			document.URL.indexOf("neptune.html") >= 0
		) {
			renderNeptune(planet)
		}
	})
}

getAllData("data.json", getData)

// redner functions for each planet

function renderMercury(planet) {
	document.documentElement.style.setProperty("--planet-color", "#419ebb")

	//render overview
	if (overviewLink.classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").style.display = "none"

		document.getElementById(
			"plant-content"
		).innerHTML = `<h2 id="planet-title">${planet.name}</h2>
		<p>${planet.overview.content}</p>
				<p class="source-p">Source: <a target="_blank" href="${planet.overview.source}">Wikipedia</a></p>`
	}
	//render structure
	if (document.querySelector(".structure").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.internal}`
		document.querySelector("#planet-image-geo").style.display = "none"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.structure.content}</p>
			<p class="source-p">Source: <a target="_blank" href="${planet.structure.source}">Wikipedia</a></p>`
	}
	//render surface
	if (document.querySelector(".surface").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").src = `${planet.images.geology}`
		document.querySelector("#planet-image-geo").style.display = "block"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.geology.content}</p>	
			<p class="source-p">Source: <a target="_blank" href="${planet.geology.source}">Wikipedia</a></p>`
	}
	document.querySelector(".planet-stats").innerHTML = `
				<div class="rotation-time">
					<h3>Rotation Time</h3>
					<p>${planet.rotation}</p>
				</div>
				<div class="revolution-time">
					<h3>Revolution Time</h3>
					<p>${planet.revolution}</p>
				</div>
				<div class="radius">
					<h3>Radius</h3>
					<p>${planet.radius}</p>
				</div>
				<div class="temp">
					<h3>Average Temp.</h3>
					<p>${planet.temperature}</p>
				</div>
	`
	document.querySelector(
		"#planet-image"
	).alt = `SVG animated image of ${planet.name}`
	document.querySelector(
		"#planet-image-geo"
	).alt = `Photo of the surface of ${planet.name}`
}

function renderVenus(planet) {
	document.documentElement.style.setProperty("--planet-color", "#eda249")

	//render overview
	if (document.querySelector(".overview").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").style.display = "none"

		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
		<p>${planet.overview.content}</p>
				<p class="source-p">Source: <a target="_blank" href="${planet.overview.source}">Wikipedia</a></p>`
	}
	//render structure
	if (document.querySelector(".structure").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.internal}`
		document.querySelector("#planet-image-geo").style.display = "none"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.structure.content}</p>
			<p class="source-p">Source: <a target="_blank" href="${planet.structure.source}">Wikipedia</a></p>`
	}
	//render surface
	if (document.querySelector(".surface").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").src = `${planet.images.geology}`
		document.querySelector("#planet-image-geo").style.display = "block"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.geology.content}</p>	
			<p class="source-p">Source: <a target="_blank" href="${planet.geology.source}">Wikipedia</a></p>`
	}
	document.querySelector(".planet-stats").innerHTML = `
				<div class="rotation-time">
					<h3>Rotation Time</h3>
					<p>${planet.rotation}</p>
				</div>
				<div class="revolution-time">
					<h3>Revolution Time</h3>
					<p>${planet.revolution}</p>
				</div>
				<div class="radius">
					<h3>Radius</h3>
					<p>${planet.radius}</p>
				</div>
				<div class="temp">
					<h3>Average Temp.</h3>
					<p>${planet.temperature}</p>
				</div>
	`
	document.querySelector(
		"#planet-image"
	).alt = `SVG animated image of ${planet.name}`
	document.querySelector(
		"#planet-image-geo"
	).alt = `Photo of the surface of ${planet.name}`
}
function renderEarth(planet) {
	document.documentElement.style.setProperty("--planet-color", "#6d2ed5")

	//render overview
	if (document.querySelector(".overview").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").style.display = "none"

		document.getElementById(
			"plant-content"
		).innerHTML = `<h2 id="planet-title">${planet.name}</h2>
		<p>${planet.overview.content}</p>
				<p class="source-p">Source: <a target="_blank" href="${planet.overview.source}">Wikipedia</a></p>`
	}
	//render structure
	if (document.querySelector(".structure").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.internal}`
		document.querySelector("#planet-image-geo").style.display = "none"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.structure.content}</p>
			<p class="source-p">Source: <a target="_blank" href="${planet.structure.source}">Wikipedia</a></p>`
	}
	//render surface
	if (document.querySelector(".surface").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").src = `${planet.images.geology}`
		document.querySelector("#planet-image-geo").style.display = "block"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.geology.content}</p>	
			<p class="source-p">Source: <a target="_blank" href="${planet.geology.source}">Wikipedia</a></p>`
	}
	document.querySelector(".planet-stats").innerHTML = `
				<div class="rotation-time">
					<h3>Rotation Time</h3>
					<p>${planet.rotation}</p>
				</div>
				<div class="revolution-time">
					<h3>Revolution Time</h3>
					<p>${planet.revolution}</p>
				</div>
				<div class="radius">
					<h3>Radius</h3>
					<p>${planet.radius}</p>
				</div>
				<div class="temp">
					<h3>Average Temp.</h3>
					<p>${planet.temperature}</p>
				</div>
	`
	document.querySelector(
		"#planet-image"
	).alt = `SVG animated image of ${planet.name}`
	document.querySelector(
		"#planet-image-geo"
	).alt = `Photo of the surface of ${planet.name}`
}

function renderMars(planet) {
	document.documentElement.style.setProperty("--planet-color", "#d14c32")

	//render overview
	if (document.querySelector(".overview").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").style.display = "none"

		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
		<p>${planet.overview.content}</p>
				<p class="source-p">Source: <a target="_blank" href="${planet.overview.source}">Wikipedia</a></p>`
	}
	//render structure
	if (document.querySelector(".structure").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.internal}`
		document.querySelector("#planet-image-geo").style.display = "none"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.structure.content}</p>
			<p class="source-p">Source: <a target="_blank" href="${planet.structure.source}">Wikipedia</a></p>`
	}
	//render surface
	if (document.querySelector(".surface").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").src = `${planet.images.geology}`
		document.querySelector("#planet-image-geo").style.display = "block"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.geology.content}</p>	
			<p class="source-p">Source: <a target="_blank" href="${planet.geology.source}">Wikipedia</a></p>`
	}
	document.querySelector(".planet-stats").innerHTML = `
				<div class="rotation-time">
					<h3>Rotation Time</h3>
					<p>${planet.rotation}</p>
				</div>
				<div class="revolution-time">
					<h3>Revolution Time</h3>
					<p>${planet.revolution}</p>
				</div>
				<div class="radius">
					<h3>Radius</h3>
					<p>${planet.radius}</p>
				</div>
				<div class="temp">
					<h3>Average Temp.</h3>
					<p>${planet.temperature}</p>
				</div>
	`
	document.querySelector(
		"#planet-image"
	).alt = `SVG animated image of ${planet.name}`
	document.querySelector(
		"#planet-image-geo"
	).alt = `Photo of the surface of ${planet.name}`
}

function renderJupiter(planet) {
	document.documentElement.style.setProperty("--planet-color", "#d83a34")

	//render overview
	if (document.querySelector(".overview").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").style.display = "none"

		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
		<p>${planet.overview.content}</p>
				<p class="source-p">Source: <a target="_blank" href="${planet.overview.source}">Wikipedia</a></p>`
	}
	//render structure
	if (document.querySelector(".structure").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.internal}`
		document.querySelector("#planet-image-geo").style.display = "none"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.structure.content}</p>
			<p class="source-p">Source: <a target="_blank" href="${planet.structure.source}">Wikipedia</a></p>`
	}
	//render surface
	if (document.querySelector(".surface").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").src = `${planet.images.geology}`
		document.querySelector("#planet-image-geo").style.display = "block"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.geology.content}</p>	
			<p class="source-p">Source: <a target="_blank" href="${planet.geology.source}">Wikipedia</a></p>`
	}
	document.querySelector(".planet-stats").innerHTML = `
				<div class="rotation-time">
					<h3>Rotation Time</h3>
					<p>${planet.rotation}</p>
				</div>
				<div class="revolution-time">
					<h3>Revolution Time</h3>
					<p>${planet.revolution}</p>
				</div>
				<div class="radius">
					<h3>Radius</h3>
					<p>${planet.radius}</p>
				</div>
				<div class="temp">
					<h3>Average Temp.</h3>
					<p>${planet.temperature}</p>
				</div>
	`
	document.querySelector(
		"#planet-image"
	).alt = `SVG animated image of ${planet.name}`
	document.querySelector(
		"#planet-image-geo"
	).alt = `Photo of the surface of ${planet.name}`
}

function renderSaturn(planet) {
	document.documentElement.style.setProperty("--planet-color", "#cd5120")

	//render overview
	if (document.querySelector(".overview").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").style.display = "none"

		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2><p>${planet.overview.content}</p>
				<p class="source-p">Source: <a target="_blank" href="${planet.overview.source}">Wikipedia</a></p>`
	}
	//render structure
	if (document.querySelector(".structure").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.internal}`
		document.querySelector("#planet-image-geo").style.display = "none"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.structure.content}</p>
			<p class="source-p">Source: <a target="_blank" href="${planet.structure.source}">Wikipedia</a></p>`
	}
	//render surface
	if (document.querySelector(".surface").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").src = `${planet.images.geology}`
		document.querySelector("#planet-image-geo").style.display = "block"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.geology.content}</p>	
			<p class="source-p">Source: <a target="_blank" href="${planet.geology.source}">Wikipedia</a></p>`
	}
	document.querySelector(".planet-stats").innerHTML = `
				<div class="rotation-time">
					<h3>Rotation Time</h3>
					<p>${planet.rotation}</p>
				</div>
				<div class="revolution-time">
					<h3>Revolution Time</h3>
					<p>${planet.revolution}</p>
				</div>
				<div class="radius">
					<h3>Radius</h3>
					<p>${planet.radius}</p>
				</div>
				<div class="temp">
					<h3>Average Temp.</h3>
					<p>${planet.temperature}</p>
				</div>
	`
	document.querySelector(
		"#planet-image"
	).alt = `SVG animated image of ${planet.name}`
	document.querySelector(
		"#planet-image-geo"
	).alt = `Photo of the surface of ${planet.name}`
}

function renderUranus(planet) {
	document.documentElement.style.setProperty("--planet-color", "#1ec1a2")

	//render overview
	if (document.querySelector(".overview").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").style.display = "none"

		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
		<p>${planet.overview.content}</p>
				<p class="source-p">Source: <a target="_blank" href="${planet.overview.source}">Wikipedia</a></p>`
	}
	//render structure
	if (document.querySelector(".structure").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.internal}`
		document.querySelector("#planet-image-geo").style.display = "none"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.structure.content}</p>
			<p class="source-p">Source: <a target="_blank" href="${planet.structure.source}">Wikipedia</a></p>`
	}
	//render surface
	if (document.querySelector(".surface").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").src = `${planet.images.geology}`
		document.querySelector("#planet-image-geo").style.display = "block"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.geology.content}</p>	
			<p class="source-p">Source: <a target="_blank" href="${planet.geology.source}">Wikipedia</a></p>`
	}
	document.querySelector(".planet-stats").innerHTML = `
				<div class="rotation-time">
					<h3>Rotation Time</h3>
					<p>${planet.rotation}</p>
				</div>
				<div class="revolution-time">
					<h3>Revolution Time</h3>
					<p>${planet.revolution}</p>
				</div>
				<div class="radius">
					<h3>Radius</h3>
					<p>${planet.radius}</p>
				</div>
				<div class="temp">
					<h3>Average Temp.</h3>
					<p>${planet.temperature}</p>
				</div>
	`
	document.querySelector(
		"#planet-image"
	).alt = `SVG animated image of ${planet.name}`
	document.querySelector(
		"#planet-image-geo"
	).alt = `Photo of the surface of ${planet.name}`
}

function renderNeptune(planet) {
	document.documentElement.style.setProperty("--planet-color", "#2d68f0")

	//render overview
	if (document.querySelector(".overview").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").style.display = "none"

		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
		<p>${planet.overview.content}</p>
				<p class="source-p">Source: <a target="_blank" href="${planet.overview.source}">Wikipedia</a></p>`
	}
	//render structure
	if (document.querySelector(".structure").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.internal}`
		document.querySelector("#planet-image-geo").style.display = "none"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.structure.content}</p>
			<p class="source-p">Source: <a target="_blank" href="${planet.structure.source}">Wikipedia</a></p>`
	}
	//render surface
	if (document.querySelector(".surface").classList.contains("active")) {
		document.querySelector("#planet-image").src = `${planet.images.planet}`
		document.querySelector("#planet-image-geo").src = `${planet.images.geology}`
		document.querySelector("#planet-image-geo").style.display = "block"
		document.getElementById("plant-content").innerHTML = `
		<h2 id="planet-title">${planet.name}</h2>
			<p>${planet.geology.content}</p>	
			<p class="source-p">Source: <a target="_blank" href="${planet.geology.source}">Wikipedia</a></p>`
	}
	document.querySelector(".planet-stats").innerHTML = `
				<div class="rotation-time">
					<h3>Rotation Time</h3>
					<p>${planet.rotation}</p>
				</div>
				<div class="revolution-time">
					<h3>Revolution Time</h3>
					<p>${planet.revolution}</p>
				</div>
				<div class="radius">
					<h3>Radius</h3>
					<p>${planet.radius}</p>
				</div>
				<div class="temp">
					<h3>Average Temp.</h3>
					<p>${planet.temperature}</p>
				</div>
	`
	document.querySelector(
		"#planet-image"
	).alt = `SVG animated image of ${planet.name}`
	document.querySelector(
		"#planet-image-geo"
	).alt = `Photo of the surface of ${planet.name}`
}
