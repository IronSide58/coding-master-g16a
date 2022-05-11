let txt_other = document.getElementById('txt_other');

function registrar() {
    let datosBasicos = [];
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let registro = document.getElementById('registro');
    let accept = document.getElementById('accept');
    let genero, terminos;

    datosBasicos.push(document.getElementById('name').value);
    datosBasicos.push(document.getElementById('apellido').value);
    datosBasicos.push(document.getElementById('address').value);
    datosBasicos.push(document.getElementById('phone').value);
    datosBasicos.push(document.getElementById('age').value);
    datosBasicos.push(document.getElementById('date').value);

    //Valida genero
    if (male.checked === true) {
        genero = 'Maculino'
    } else if (female.checked === true) {
        genero = 'Femenino'
    } else {
        genero = txt_other.value;
    }
    datosBasicos.push(genero);

    //Valida si acepta terminos
    if (accept.checked === true) {
        terminos = 'Si';
        datosBasicos.push(terminos);

        //Agrego un registro a la tabla
        const tr = document.createElement('tr');

        //Agregar nodos a la tabla
        for(var i=0; i<datosBasicos.length; i++){
            const td = document.createElement('td');
            let texto = document.createTextNode(datosBasicos[i]);

            td.appendChild(texto);
            tr.appendChild(td);
        }

        registro.appendChild(tr);
    } else {
        alert('Para ser registrado debe aceptar terminos y condiciones');
    }
}

function validarGenero(parametro) {
    if (parametro === 3) {
        txt_other.style.display = 'inline-block';
    } else {
        txt_other.style.display = 'none';
    }
}