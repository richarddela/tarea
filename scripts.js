/*
Este programa pregunta 5 cosas*/
console.log("Inicio del programa");
var html = '';
for (var i = 1; i <= 10; i++) {
html += "<div>" + i + "</div>";
}
document.write(html);
console.log("Programa completado");