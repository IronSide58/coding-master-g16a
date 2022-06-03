class Alumno {
    constructor(nombre, apellido, inscrito, caliFinal, ...materias) {
        this.nombre = nombre
        this.apellido = apellido
        this.caliFinal = caliFinal
        this.inscrito = inscrito
        this.materias = materias
    }
    estarInscrito() {
        if (this.inscrito) {
            return 'El alumno esta inscrito';
        } else {
            return 'El alumno no esta inscrito';
        }
    }
    obtenerIniciales() {
        let iniciales = `${this.nombre.substring(0,1)}${this.apellido.substring(0,1)}`;
        return iniciales;
    }
    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    aprobado() {
        if(this.caliFinal>= 6)
            return 'Aprobado';
        else
            return 'Reprobado';
    }
    agregarCalificacion(nombreMateria, califi) {
        let nuevaMateria = {
            Nombre: nombreMateria,
            Calificaciones: califi
        };
        this.materias.push(nuevaMateria);
        return 'Materia Agregada';
    }
    obtenerPromedio() {
        let suma = 0;
        for(let i = 0; i < this.materias.length; i++){
            suma+= this.materias[i].Calificaciones;
        }
        this.caliFinal = suma / this.materias.length;
        return this.caliFinal;
    }
}

let alumno_1= new Alumno('Uriel', 'Bucio', false);