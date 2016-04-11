var lenguaje = prompt("Que lenguaje de programacion te gusta mas?");
var lenguaje = lenguaje.toLowerCase();
document.write("<h1>Dime que lenguaje programas y te dire quien eres</h1>");
if(lenguaje === 'java') {
	document.write("<p>Excelente eleccion, nos tomamos un cafe?</p>");
}

if(lenguaje === 'ruby') {
	document.write("<p>Poderoso lenguaje, te gustan las gemas?</p>");
}

if(lenguaje === 'c') {
	document.write("<p>Clasico! Este lenguaje se usa en todo!</p>");
}

if(lenguaje === 'python') {
	document.write("<p>Bakan, eres cientifico de datos?</p>");
}


if(lenguaje === 'ninguno') {
	document.write("<p>Looooooooooseeeeeeeeeeeeer!</p>");
}