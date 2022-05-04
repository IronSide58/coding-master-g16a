//Ejemplo 1.
// function sumatoria(num1, num2) {
//     var total = num1 + num2;
//     return document.write(`La sumatoria de ${num1} y ${num2} es: ${total}`);
// }

// sumatoria(5, 10);

//Ejemplo 2.
// function resta(a, b, c) {
//     var resultado = a - b - c;
//     return resultado;
// }

// document.write(`El resultado de la resta es: ${resta(5, 8, 10)}`);

// //Ejemplo 3.
// function tabla(num) {
//     for(var i=1; i<=10; i++) {
//         document.write(`${num} x ${i} = ${num * i} <br>`);
//     }
// }

// tabla(2);

// //Ejemplo 4.
// function suma(num1, num2, num3) {
//     var total = num1 + num2 + num3;
//     return total;
// }

// var res = suma(10, 2, 5);

// document.write(`La suma es: ${res}`);

// //Ejemplo 5.
// function saludo(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     document.write(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
// }

// saludo('Uriel', 22);

// //Ejemplo 6.
// function mayorDeEdad(edad) {
//     if (edad>=18) {
//         console.log(`Eres mayor de edad`);
//     } else {
//         document.write(`No eres mayor de edad`);
//     }
// }

// mayorDeEdad(50);

// var numerosNaturales = (numero) => {
//     for(var i=1; i<numero; i++) {
//         document.write(` ${i} `);
//     }
// }

// numerosNaturales(20);