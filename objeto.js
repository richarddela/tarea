var persona = {
	nombre: "Ivan",
	pais: "Ecuador",
	edad: 27,
	laborando: true,
	habilidades: ["Java", "C#", "C++", "Python", "JavaScript", "R"]
};

function printHTML(mensaje)
{
	//document.write(html);
	//Reemplazado por Get elementByID para tomar el nodo (Node Object) en el DOM
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

for(llave in persona){
	console.log(llave, ": ", persona[llave]);
}