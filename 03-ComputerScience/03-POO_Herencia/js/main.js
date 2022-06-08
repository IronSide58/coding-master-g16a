/*class Animal {
    constructor() {
        this.brain = true;
        this.legs = 0;
    }
}

class Human extends Animal {
    constructor() {
        super().legs = 2;
    }
}

class Pets extends Animal {
    constructor() {
        super().legs = 4;
        this.fleas = 0;
    }
    bath() {
        this.fleas = 0;
    }
}

class Dog extends Pets {
    constructor() {
        super().fleas = 8;
    }
}

class Cat extends Pets {
    constructor() {
        super().fleas = 2;
    }
}*/
/*----------------- Ejercicios -------------------*/
class Maestro{
    constructor(materia) {
        this.materia = materia;
        this.promedio = this.promedio;
        this.Calificaciones = [];
        this.materias = [];
    }
    asignarCalificaciones(...Calificaciones) {
        this.Calificaciones = this.Calificaciones.concat(Calificaciones);  
    }
    obtenerPromedio() {
        let suma = 0
        for (let i = 0; i < this.Calificaciones.length; i++) {
            suma += this.Calificaciones[i];
        }
        return this.promedio = suma/this.Calificaciones.length;
    }
    asignarMaterias(name) {
        name = new Materia(name);
        this.materias.push(name);
    }
}
class Materia{
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class maestroFisica extends Maestro{
    constructor(antiguedad){
        super('Fisica');
        this.antiguedad = antiguedad;
    }
}
class maestroMusica extends Maestro{
    constructor(edad){
        super('Musica');
        this.edad = edad;
    }
}

let Prof_Fisica = new maestroFisica(10);
let Prof_Musica = new maestroMusica(20);

//Ejercicio 2
class Construccion{
    constructor(numPuertas, numVentanas, direccion) {
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.direccion = direccion;
    }
    regresarDireccion() {
        return this.direccion;
    }
    modificarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }
    obtnerMetrosCuadrados(largo, ancho){
        return largo * ancho;
    }
}
class casa extends Construccion {
    constructor(numPuertas, numVentanas, direccion) {
        super(numPuertas, numVentanas, direccion);
    }
}
class edificio extends Construccion {
    constructor(numPuertas, numVentanas, direccion) {
        super(numPuertas, numVentanas, direccion);
    }
}

let casaNew = new casa(2, 5, 'México');
let edificioNew = new edificio(2, 10, 'España');

//Ejercicio 3
class Bebida {
    constructor(cantidad) {
        this.cantidad = cantidad;
    }

}
class refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    }
    getRefresco() {
        return `Contiene ${this.cantidad} ml y ${this.azucar} g de azucar`;
    }
    setRefresco(cantidad, azucar) {
        this.cantidad = cantidad;
        this.azucar = azucar;
        return 'Atributos modificados';
    }
}
class cerveza extends Bebida {
    constructor(cantidad, porAlchol){
        super(cantidad);
        this.porAlchol = porAlchol;
    }
    getCerveza() {
        return `Contiene ${this.cantidad} ml y ${this.porAlchol} % de alchol`;
    }
    setCerveza(cantidad, porAlchol) {
        this.cantidad = cantidad;
        this.porAlchol = porAlchol;
        return 'Atributos modificados';
    }
}

let cocaCola = new refresco(100, 20);
let cervezaF = new cerveza(50, 10);

//Ejercicio 4
class Electrodomesticos {
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = this.consumoEnergetico = 100;
        this.capacidad = capacidad;
    }
}

let microondas = new Electrodomesticos(1500, 'Blanco', 'Cocinar');

//Ejercicio 5
class lavadora extends Electrodomesticos {
    constructor(precio, color, capacidad,carga) {
        super(precio, color, capacidad);
        this.carga = carga;
    }
    precioFinal() {
        return this.consumoEnergetico * this.carga;
    }
}

let lavadoraNew = new lavadora(2000, 'Azul', 100, 25);