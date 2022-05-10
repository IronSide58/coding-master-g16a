// Crear una aplicación que permita obtener la nota promedio de cada estudiante de un profesor y la nota promedio del grupo completo
//  1. Se requiere que cada alumno tenga: Nombre completo y sus caificaciones.
//  2. Se requiere que el profesor indique cuantos estudiantes va a ingresar.
//  3. Se requiere que el profesor indique cuantas notas digitara para cada alumno.
//  4. Imprimir con Alert el promedio de cada estudiante.
//  5. Imprimir con Alert el promedio general del grupo.
var cantidadAlumnos = Number(prompt('¿Cuántos alumnos va a registrar?'));
var cantidadCalificaciones = Number(prompt('¿Cuántas calificaciones va a ingresar por alumno?'));
var dataBase = [];
var suma = 0;
var total = 0.0;

class Alumno {
    constructor(nombreCompleto){
        this.Nombre = nombreCompleto;
        this.Calificaciones = [];
        this.Promedio = 0;
    }
}

for(var i=0; i < cantidadAlumnos; i++) {
    var capturarNombre = prompt(`Ingresa el nombre del alumno ${i + 1}:`);
    crearAlumno(capturarNombre);
    for (var j=0; j<cantidadCalificaciones; j++){
        var capturarCalificaciones = Number(prompt(`Ingresa la calificacion ${j + 1} de ${dataBase[i].Nombre}`));
        dataBase[i].Calificaciones[j] = capturarCalificaciones;
        suma = suma + dataBase[i].Calificaciones[j];
    } 
    dataBase[i].Promedio = suma/cantidadCalificaciones;
    suma = 0;
    total = total + dataBase[i].Promedio;
}

var promedioGrupal = promedioGrupal = total/dataBase.length;

console.log(dataBase);
console.log(promedioGrupal);

//funciones
function crearAlumno (capturarNombre) {
    var NewAlumno = new Alumno(capturarNombre);
    AgregarObjeto (NewAlumno);
}

function AgregarObjeto (objeto){
    dataBase.push(objeto);
}