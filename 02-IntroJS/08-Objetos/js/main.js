//Declaración de objeto literal 
let Vehiculo = {
    Marca : "Mazda",
    Color : "Blanco",
    Modelo : 2022,
    Tipo : "Sedan",
    Valor : 200000,
    tipoLlanta : ['Michelin', 'Roock'],
    EnStock : true,
    Estado : function (estado){
        if (estado === 1) {
            return '<br>El vehiculo se apago';
        } else {
            return '<br>El vehiculo se encendio';
        }
    },
    Mantenimiento : (estado) => {return estado === 1 ? '<br> El vehiculo salio de mantenimiento' : '<br>El vehiculo esta en mantenimiento'} 
}

document.write('El vehiculo es de marca: ' + Vehiculo.Marca + ' y tiene un valor de ' + Vehiculo.Valor);

//Template String
document.write(`<br>El vehiculo es de marca: ${Vehiculo.Marca} y tienen un valor de ${Vehiculo.Valor}`);

//Desestructuración
const {Tipo, Modelo, Color, Marca} = Vehiculo;
document.write(`<br>El vehiculo es de color: ${Color} y es del año: ${Modelo}`);

document.write(`<br>${Vehiculo.tipoLlanta[1]}`);

//Acceder a un método
document.write(Vehiculo.Estado(1));
document.write(Vehiculo.Estado(0));

document.write(Vehiculo.Mantenimiento(1));
document.write(Vehiculo.Mantenimiento(0));