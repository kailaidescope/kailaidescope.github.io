var a = document.getElementById("mapsvg");
var drawn_map = document.getElementById("drawn-map");

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener("load", function(){

	alert("hi");
	console.log(document.getElementById("Muonir"));

	// add behaviour
	drawn_map.addEventListener("mousedown", function(event){
			alert('hello world!');
			console.log(drawn_map.innerHTML);
			document.getElementById('Muonir').setAttribute('color',"red");
	}, false);
}, false);