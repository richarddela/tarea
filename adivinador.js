var limiteSuperior = 10000;
var random = Math.round(Math.random()*limiteSuperior);
var intentos = 0;
while(true)
{
	var numAdivinado = Math.round(Math.random()*limiteSuperior);
	intentos++;
	console.log("adivinado, por favor espere");
	if(numAdivinado===random)
	{
		alert("Numero adivinado. El numero era: " + numAdivinado 
			+ ". Intentos: " + intentos);
		break;
	}
}
alert("Chao. Imprimiendo numero original: " + random);