//Definición de clases de POO
class Vehiculo {
    constructor(marca, modelo, valor, color) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Valor = valor;
        this.Color = color;
        this.Estado = function (estado) {
            if (estado === 1) {
                return '<br>El vehiculo se apago';
            } else {
                return '<br>El vehiculo se encendio';
            }
        }
    }
}

//CReamos copia de la clase Vehiculo
let Vehiculo_1 = new Vehiculo('Toyota', 2022, 230000, 'Blanco');
let Vehiculo_2 = new Vehiculo('Nissan', 2021, 250000, 'Negro');
let Vehiculo_3 = new Vehiculo('Mazda', 2022, 182000, 'Morado');

document.write(Vehiculo_1.Marca);
document.write('<br>'+ Vehiculo_2.Marca);
document.write(Vehiculo_1.Estado(1));
document.write(Vehiculo_2.Estado(0));

let arregloVehiculos = [Vehiculo_1, Vehiculo_2, Vehiculo_3];

//Obtener propiedades con Map
let nombresVehiculos = arregloVehiculos.map(obtenerNombre);

document.write(`<br> ${nombresVehiculos}`);

//Filtrar propiedades con filter
let filtroVehiculos = arregloVehiculos.filter(filtroValor);

// document.write(filtroVehiculos);
console.log(filtroVehiculos);

//Funciones
//MAP
function obtenerNombre (object) {
    return object.Marca;
}

//Filter
function filtroValor(objet) {
    if (objet.Valor <= 200000) {
        return objet;
    }
}