var map_html = document.getElementById("map-svg");
var button = document.getElementById("map-button");
var map_svg;
var element;

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
map_html.addEventListener("load", () => {

	//alert("SVG Loaded");
	console.log(map_html.contentDocument);
	map_svg = map_html.contentDocument;
	element = map_svg.getElementById("Muonir");
	console.log(element);


	// add behaviour
	button.addEventListener("click", (event) => {
			//alert("Color changed");
			element.style.fill = "blue";
	}, false);
}, false);