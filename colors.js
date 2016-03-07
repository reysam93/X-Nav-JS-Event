setup = function(){
	colorForm = document.getElementById('colour');
	colourTry = document.getElementById('colourChosen');
	colorForm.addEventListener('input', setColour);
}

setColour = function(){
	var colour = colorForm.value;
	colourTry.style.backgroundColor = colour;
}