var productosDisponibles = ["rapidito", "manzana", "guineo", "jamon", "queso", "yerbabuena", "papas", "sal", "tomate", "verde", "maduro", "pescado", "azucar"];

var busqueda;

function print(mensaje){
	document.write("<p>" + mensaje + "</p>");
}

while(true)
{
	busqueda = prompt("Presione q para salir, l para listar o Ingrese el producto a buscar: ");
	busqueda = busqueda.toLowerCase();
	if(busqueda=="salir" || busqueda=="fin" || busqueda=="chao" || busqueda=="quit" || busqueda=="q")
	{
		alert("Gracias por usar el buscador, chao!");
		break;
	}else if(busqueda=="lista" || busqueda=="inventorio" || busqueda=="lista" || busqueda=="l"){
		print("En nuestra tiendita tenemos: " + productosDisponibles.join(", "));
	}else{
		if(productosDisponibles.indexOf(busqueda)>=0)
		{
			alert("Si tenemos " + busqueda + " en nuestra tiendita! Compre patronceto!");
		}else{
			alert("Chuta! No tenemos " + busqueda + " en nuestra tienda, pero le conseguimos para manana!");
		}
	}
}