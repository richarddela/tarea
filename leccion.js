/*******************Descripcion*******************
Este programa es un registro de Clase, que permite buscar por estudiante 
y listar los estudiantes uno a uno.
*/

//**********Seccion de Datos*******************

//Datos de estudiantes
var estudiantes = [
{nombre: "Noah", edad: 24, lenguajeProg: "Python", identidadSexual: "fluido"},
{nombre: "Andrea", edad: 27, lenguajeProg: "C#" , identidadSexual: "mujer"},
{nombre: "Wilfrido", edad: 32, lenguajeProg: "JavaScript" , identidadSexual: "hombre" },
{nombre: "Ivan", edad: 27, lenguajeProg: "Java" , identidadSexual: "hombre" },
{nombre: "Carlota", edad: 36, lenguajeProg: "Perl" , identidadSexual: "trans" },
{nombre: "Bonnie", edad: 33, lenguajeProg: "Ruby" , identidadSexual: "indefinido" }
];

/************Seccion de Funciones***************
/*Esta funcion imprime HTML a un div especifico, 
en caso de error, muestra por consola e imprime a div info estudiantes
*/
function printHTML(mensaje, div)
{
	//document.write(html);
	//Reemplazado por Get elementByID para tomar el nodo (Node Object) en el DOM
	var outputDiv = document.getElementById(div);
	if(outputDiv!=null)
	{
		outputDiv.innerHTML = mensaje;	
	}else{
		throw new Error("Nombre de div incorrecto, reimprimiendo en div estudiantes.");
		printHTML(mensaje, "info-estudiantes");
	}
	
}

/* Imprime tan solo en el div Estudiantes la info de estudiantes
*/
function printHTMLEstudiantes(mensaje)
{
	printHTML(mensaje, "info-estudiantes")
}



//Imprime el record de un solo estudiante
function imprimirEstudiante(estudiante)
{
	var htmlSimpleRecordEstudiante = "<ul>";
	for(var prop in estudiante)
	{
		htmlSimpleRecordEstudiante += "<li> "
		+ prop + ": " + estudiante[prop] + "</li>";
	}
	htmlSimpleRecordEstudiante += "</ul>";
	return htmlSimpleRecordEstudiante;
}

//Borra HTML del Div especificado
function limpiarHTML(div) {
	printHTML("",div);
}

//Borra HTML del div info-estudiantes
function limpiarHTMLEstudiantes() {
	var outputDiv = limpiarHTML("info-estudiantes");
}

//Imprime todos los datos de todos los estudiantes de la clase
function imprimirClase()
{
	var htmlRecordsEstudiantes = '';
	for(var i=0; i<estudiantes.length; i++)
	{
		var registroEstudiante = estudiantes[i];
		htmlRecordsEstudiantes += imprimirEstudiante(registroEstudiante);
	}
	printHTMLEstudiantes(htmlRecordsEstudiantes);
}

//Busca el record de un simple estudiante en el arreglo de objetos estudiante
function buscarEstudiante()
{
	var encontrado = false;
	while(true)
	{
		do
		{
		var estudianteBuscado = prompt("Ingrese el nombre del estudiante a buscar, la 'l' para listar todos los estudiantes o la 's' para salir");
		}while(estudianteBuscado == '');

		estudianteBuscado = estudianteBuscado.toLowerCase();
		if(estudianteBuscado == 'l' || estudianteBuscado == 's')
		{
			if(estudianteBuscado == 'l')
			{
				imprimirClase();
			}
			break;
		}else{
			for(var i = 0; i<estudiantes.length; i++)
			{
				var estudianteSolo = estudiantes[i];
				if(estudianteSolo.nombre.toLowerCase()==estudianteBuscado)
				{
					limpiarHTMLEstudiantes();
					alert("hey, entramos en record de: " + estudianteSolo.nombre.toLowerCase());
					encontrado = true;
					printHTMLEstudiantes(imprimirEstudiante(estudianteSolo));
					break;
				}
			}

			if(!encontrado)
			{
				alert("Estudiante no encontrado");
			}
		}
	}
}

//***************Seccion de Ejecucion*******************
var HTMLEncabezado = "<h1>Registro estudiantil</h1>";
printHTML(HTMLEncabezado, "info-encabezado");
buscarEstudiante();
