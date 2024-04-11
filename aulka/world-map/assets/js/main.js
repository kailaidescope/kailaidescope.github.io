let map_html = document.getElementById("map-svg");
let info_title = document.getElementById("info-title");
let info_description = document.getElementById("info-description");
let map_svg;
let muonir_path;

info_title.textContent = "Hover on region to learn more!";

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
map_html.addEventListener("load", () => {

	//alert("SVG Loaded");
	console.log(map_html.contentDocument);
	map_svg = map_html.contentDocument;

	muonir_path = map_svg.getElementById("Muonir");

	const regions = map_svg.getElementsByClassName("region");
	let regions_fill = [];

	for (let i = 0; i < regions.length; i++) {

		regions_fill.push(regions[i].style.fill);

		regions[i].addEventListener("mouseenter", () => {
			regions[i].style.fill = "#abb823";
			info_title.textContent = regions[i].getAttribute("inkscape:label");
			info_description.textContent = "Dungeons & Dragons (commonly abbreviated as D&D or DnD)[2] is a fantasy tabletop role-playing game (RPG) originally created and designed by Gary Gygax and Dave Arneson.[3][4][5] The game was first published in 1974 by Tactical Studies Rules, Inc. (TSR).[5] It has been published by Wizards of the Coast, later a subsidiary of Hasbro, since 1997.";
		}, false);

		regions[i].addEventListener("mouseleave", () => {
			regions[i].style.fill = regions_fill[i]; 
			info_title.textContent = "Hover on region to learn more!";
			info_description.textContent = "";
		}, false);
	}

	console.log(regions_fill);
	
}, false);