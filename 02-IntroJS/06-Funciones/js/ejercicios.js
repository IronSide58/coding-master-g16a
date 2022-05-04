//Ejercicio 1. Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
// 1. "Positivo" si el número es positivo.
// 3. "Negativo" si el número es negativo.
// 1. "Cero" si el número es cero.
// document.write('<h3>Ejercicio 1</h3>');
// var numero = Number(prompt('Ingresa un número'));

// evaluate(numero);

// function evaluate(num) {
//     if (num > 0) {
//         document.write(`El número ${num} es positivo`);
//     } if (num < 0) {
//         document.write(`El número ${num} es negativo`);
//     } if (num === 0) {
//         document.write(`El número ${num} es cero`);
//     }
// }

//Ejercicio 2. Escriba una función para ingresar cualquier letra de alfabeto y verifique si es vocal o consonante.
// document.write('<br><h3>Ejercicio 2</h3>');
// var letra = prompt('Ingresa una letra');

// evaluar(letra);

// function evaluar(letter) {
//     if (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
//         document.write(`La letra ${letter} es una vocal`);
//     } else {
//         document.write(`La letra ${letter} es una consonante`);
//     }
// }

//Ejercicio 4. Realiza una funcion con la cual determine si una cadena de texto es palindromo o no.
document.write('<h3>Ejercicio 4</h3><br>');

var text = prompt('Ingresa una cadena de texto a evaluar');

evaluarText(text);

function evaluarText(texto) {
    var cad = invertir(texto);
    if (texto === cad ) {
        document.write(`La palabra ${texto} es una palabra palindromo`);
    } else {
        document.write(`La palabra ${texto} no es una palabra palindromo`);
    }
    function invertir(cadena) {
        return cadena.split('').reverse().join('');
    }
}