var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setHex() {
	var color1 = document.getElementsByName('color1')[0].value;
	var color2 = document.getElementsByName('color2')[0].value;
	document.getElementById('hex1').innerHTML = color1;
	document.getElementById('hex2').innerHTML = color2;
}

setHex();

color1.addEventListener("change", function(){setHex();});
color2.addEventListener("change", function(){setHex();});
