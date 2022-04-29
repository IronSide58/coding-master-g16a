// Definir variables
var nombreCompleto;
var edad;
var genero;
var viveNorte;
var estado;
var semanaEmbarazo;

// Solicitar datos
nombreCompleto = prompt('Ingresa tu nombre');
edad = prompt('Ingresa tu edad');

//Logica del algoritmo
if (nombreCompleto !== '' && !isNaN(edad)) {
    if (edad>=18) {
        viveNorte = prompt('Vives en el Norte del pais: S = Si N = No');
        if (viveNorte.toUpperCase() == 'S') {
            genero = prompt('Selecciona tu genero: F= Femenino M= Masculino');
            if (genero.toUpperCase() == 'F') {
                estado = prompt('¿Estas embarazada? S = Si N = No');
                if (estado.toUpperCase() == 'S') {
                    semanaEmbarazo = prompt('¿Cuantas semanas de gestación tienes?');
                    if (semanaEmbarazo > 9) {
                        alert(`Hola ${nombreCompleto} felicidades puedes vacunarte`);
                    } else {
                        alert(`Lo sentimos ${nombreCompleto} no puedes vacunarte`);
                    }
                } else {
                    alert(`Hola ${nombreCompleto} felicidades puedes vacunarte`);
                }
            } else {
                alert(`Hola ${nombreCompleto} felicidades puedes vacunarte`);
            }
        } else {
            if (edad>= 30) {
                genero = prompt('Selecciona tu genero: F= Femenino M= Masculino');
                if (genero.toUpperCase() == 'F') {
                    estado = prompt('¿Estas embarazada? S = Si N = No');
                    if (estado.toUpperCase() == 'S') {
                        semanaEmbarazo = prompt('¿Cuantas semanas de gestación tienes?');
                        if (semanaEmbarazo > 9) {
                            alert(`Hola ${nombreCompleto} felicidades puedes vacunarte`);
                        } else {
                            alert(`Lo sentimos ${nombreCompleto} no puedes vacunarte`);
                        }
                    } else {
                        alert(`Hola ${nombreCompleto} felicidades puedes vacunarte`);
                    }
                } else {
                    alert(`Hola ${nombreCompleto} felicidades puedes vacunarte`);
                }
                alert(`Hola ${nombreCompleto} felicidades puedes vacunarte`);
            } else {
                alert(`Lo sentimos ${nombreCompleto} aún no puedes vacunarte`);
            }
        }
    } else {
        alert(`Lo sentimos ${nombreCompleto} aún no puedes vacunarte`);
    }
} else {
    alert('Ups no colocaste un dato o fue un dato incorrecto, intentalo de nuevo !!');
}