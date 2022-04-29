//Ejercicio Dos
var fullName = prompt('Ingresa tu nombre completo');
var catidadNotas = Number(prompt('Ingresa la cantidad de notas a evaluar'));
var notas = 0;
var i = 1;
var suma = 0;
var promedio = 0;

do {
    notas = Number(prompt(`Ingresa la ${i} nota`));
    suma = notas + suma;
    i++;
} while (i <= catidadNotas);

promedio = suma / catidadNotas;

document.write(`${fullName} tu promedio fue de: ${promedio} <br>`);

if (promedio >= 6) {
    document.write('Felicidades pasaste el curso');
} else {
    document.write('Lo siento no pasaste el curso   ')
}