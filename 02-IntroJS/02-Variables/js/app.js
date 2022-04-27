//Paso 1. Definir las variables para datos de entrada
var fullName;
var birthYear;
var currentYear;

//Paso 1.1. Definir variables del uso del algoritmo
var age;
var eres;
//Paso 2. Solicitar datos al Usuario
fullName = prompt('Ingresa tu nombre completo:');
birthYear = prompt('Ingresa tu año de nacimiento');
currentYear = prompt('Ingresa el año actual');

//Paso 3. Ejecutar la logica del programa
age = currentYear - birthYear;

if (age<=11) {
    eres = ' eres un niño';
} else if (age>=12 && age<=17) {
    eres = ' eres un adolecente'
} else if (age>=18 && age<=29) {
    eres = ' eres un joven adulto'
} else if (age>=30 && age<=59) {
    eres = ' eres un adulto'
} else {
    eres = ' eres un adulto mayor'
}

//Paso 4. Definir la salida de los datos
document.write('Hola ' + fullName + ', tu edad es: ' + age + ' y' + eres);