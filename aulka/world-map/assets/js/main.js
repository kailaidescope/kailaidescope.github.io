let map_html = document.getElementById("map-svg");
let info_title = document.getElementById("info-title");
let info_description = document.getElementById("info-description");
let map_svg;
let muonir_path;

info_title.textContent = "Hover on region to learn more!";

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
map_html.addEventListener("load", () => {

	map_svg = map_html.contentDocument;

	muonir_path = map_svg.getElementById("Muonir");

	const regions = map_svg.getElementsByClassName("region");
	let regions_fill = [];
	let current_region;

	// Make all regions hoverable and display associated text
	for (let i = 0; i < regions.length; i++) {

		regions_fill.push(regions[i].style.fill);

		regions[i].addEventListener("click", () => {
			if (current_region != null && current_region == i)
			{   // Deselect region if selected
				regions[i].style.fill = regions_fill[i]; 
				info_title.textContent = "Click on region to learn more!";
				info_description.textContent = "";
				current_region = null;
			} else
			{	// Select region if not selected
				// Reset currently selected region
				if (current_region != null)
				{
					regions[current_region].style.fill = regions_fill[current_region]; 
					info_title.textContent = "Click on region to learn more!";
					info_description.textContent = "";
				}

				regions[i].style.fill = "#abb823";
				info_title.textContent = regions[i].getAttribute("inkscape:label");
				if(regions[i].getElementsByTagName("desc")[0] != null){
					info_description.textContent = regions[i].getElementsByTagName("desc")[0].textContent;
				}
				current_region = i;
			}
		}, false);
	}
	
}, false);