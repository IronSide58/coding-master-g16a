function Alumnos(nombre, apellido, caliFinal, incrito) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.caliFinal = caliFinal;
    this.incrito = incrito;
    this.Calificaciones = [];
}
Alumnos.prototype.obtenerInicialesDeAlumno = function() {
    return `${this.nombre.split('')[0]}, ${this.apellido.split('')[0]}`;
}
Alumnos.prototype.obtenerNombreCompleto = function() {
    return `${this.nombre} ${this.apellido}`;
}
Alumnos.prototype.aprobado = function() {
    //return this.caliFinal >= 6.0
    return this.caliFinal >= 6.0 ? "El alumno está aprobado" : "El alumno no está aprobado"; //operador i
    /*Forma tradicional
    if (this.caliFinal >= 6.0) {
        return "El alumno está aprobado";
    } else {
        return "El alumno no está aprobado"
    }*/
}
Alumnos.prototype.agregarCalificacion = function(materia, promedio) {
    let calificacion = {
        materia: materia,
        promedio: promedio
    }
    this.Calificaciones.push(calificacion);
}
Alumnos.prototype.obtenerPromedio = function(){
    let suma = 0;
    for (let i = 0; i < this.Calificaciones.length; i++) {
        suma += this.Calificaciones[i].promedio;
    }
    return this.caliFinal = suma/this.Calificaciones.length;
}
let alumno = new Alumnos('Abi', 'Lopez', 10, true);