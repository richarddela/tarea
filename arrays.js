/*
Este programa muestra una lista musical.
Sirve para demostrar el uso de arreglos y los metodos
push y unshift
*/

//Esta funcion arma el HTML una lista ordenada de elementos
function printListaReproduccion( listaCanciones ) {
  var listaHTML = '<ol>';
  for (var i = 0; i < listaCanciones.length; i += 1) {
    listaHTML += '<li>Tema: ' +listaCanciones[i][0] + '. Por: ' + listaCanciones[i][1]  + '</li>';
  }
  listaHTML += '</ol>';
  print(listaHTML);
}

//Esta funcion imprime el HTML que le demos
function print(html) {
  document.write(html);
}

var playList = [];
playList.push(["Strangers in the night", "Frank Sinatra"]);
playList.push(["Mi conejito era tan bandidon", "Los Conquistadores"]);
playList.push(["Borro Cassette", "Maluma"]);
playList.unshift(["The girl from Ipanema", "Astrud Gilberto & Stan Getz"]);
playList.unshift(["Soneros de Bailadores","Cheo Feliciano, Pete 'El Conde' Rodriguez, Tito Puente, Perico, Giovanni"]);

printListaReproduccion( playList );

