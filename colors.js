setup = function(){
	colorForm = document.getElementById('colour');
	colourTry = document.getElementById('colourChosen');
	colorForm.addEventListener('input', setColour);
}

setColour = function(){
	var colour = colorForm.value;
	if(colour[0] == '#'){
		colour = colour.split("#")[1];
	}
	if (colour.length == 6){
		colourTry.style.backgroundColor = '#' + colour;
	}
}