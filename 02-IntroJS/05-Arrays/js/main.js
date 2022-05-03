//Ejercicio 1
// var array = [];
// var valores = ['Hola', 'Mascota', 'Comida', 'Adios'];

// for(var i = 0; i < valores.length; i++){
//     document.write(`${valores[i]} `);
// }

//Ejercicio 2
// var mascota, cadenamascota;
// var arraymascotas = [];

// mascota = prompt('Ingresa el nombre de tu mascota');

// if (mascota === '') {
//     alert('No ingresaste ningun dato, agregalo')
// } else {
//     arraymascotas.push(mascota);

//     cadenamascota = `Su mascota es: ${arraymascotas[0]}.`;
// }

// document.write(cadenamascota);

//Ejercicio 3
// var calificaciones = [];
// var nombre;
// var cantidad;
// var suma = 0;
// var promedio = 0;

// nombre = prompt('Ingresa tu nombre');
// cantidad = Number(prompt('¿Cuantas calificaciones vas a agregar?'));

// for(var i=0; i<cantidad; i++){
//     calificaciones [i] = Number(prompt(`Ingresa la ${i + 1} calificación`));
//     suma = suma + calificaciones[i];
// }

// promedio = suma/cantidad;

// document.write(`Hola ${nombre} las calificaciones que ingresaste fueron: <br>`);
// for(i=0; i<cantidad; i++){
//     document.write(`${calificaciones[i]}, `);
// }
// document.write(`<br> Y tu promedio fue de: ${promedio}`);

//Ejercicio: 
// 1. Crear un arreglo de 6 platillos
// 2. Mediante un ciclo for, mostrar todos los platillos
// 3. Mediante un for o if, mostrar solo el valor 3 y 5
// 4. Mediante un for o if, mostrar los elementos impares
// 5. Mediante un for o if, mostrar los elementos impares
var platillos = ['Sopa', 'Ensalada', 'Carne', 'Mole', 'Pozole', 'Enchiladas'];

document.write(`Los platillos en el menú son: <br>`);
for(var i=0; i<platillos.length; i++) {
    document.write(`${i+1}. ${platillos[i]} <br>`);
}

document.write(`<br>Los platillos 3 y 5 en el menú son: <br>`);
for(i=0; i<platillos.length; i++) {
    if (platillos[i] === platillos[2] || platillos[i] === platillos[4]) {
        document.write(`${i+1}. ${platillos[i]} <br>`);
    }
}

document.write(`<br>Los platillos impares en el menú son: <br>`);
for(i=0; i<platillos.length; i++) {
    if (i %2 === 0) {
        document.write(`${i+1}. ${platillos[i]} <br>`);
    }
}

document.write(`<br>Los platillos pares en el menú son: <br>`);
for(i=0; i<platillos.length; i++) {
    if (i %2 !== 0) {
        document.write(`${i+1}. ${platillos[i]} <br>`);
    }
}