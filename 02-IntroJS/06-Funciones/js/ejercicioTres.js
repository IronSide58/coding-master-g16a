//Ejercicio 3. Realiza un juego de piedra, papel o tijera, en el cual el usuario ingrese su nombre y eligan la opción que quiera. Y muestre quien gana.
document.write('<br><h3>Ejercicio 3</h3>');
var player_1 = prompt('Ingresa el nombre del jugador 1');
var player_2 = prompt('Ingresa el nombre del jugador 2');

game(player_1, player_2);

function game(name_1, name_2) {
    var puntaje_1=0, puntaje_2=0;
    for(var i=0; i<3; i++) {
        var accionPlayer_1 = prompt('Jugador 1 Ingresa piedra, papel o tijeras');
        var accionPlayer_2 = prompt('Jugador 2 Ingresa piedra, papel o tijeras');
        if (accionPlayer_1.toLowerCase() === 'piedra' && accionPlayer_2.toLowerCase() === 'papel' || accionPlayer_2.toLowerCase() === 'piedra' && accionPlayer_1.toLowerCase() === 'papel') {
            if (accionPlayer_1.toLowerCase() === 'papel' && accionPlayer_2.toLowerCase() === 'piedra') {
                puntaje_1 = puntaje_1 + 1;
            } else {
                puntaje_2 = puntaje_2 + 1;
            }
        } if (accionPlayer_1.toLowerCase() === 'tijeras' && accionPlayer_2.toLowerCase() === 'papel' || accionPlayer_2.toLowerCase() === 'tijeras' && accionPlayer_1.toLowerCase() === 'papel') {
            if (accionPlayer_1.toLowerCase() === 'tijeras' && accionPlayer_2.toLowerCase() === 'papel') {
                puntaje_1 = puntaje_1 + 1;
            } else {
                puntaje_2 = puntaje_2 + 1;
            }
        } if (accionPlayer_1.toLowerCase() === 'tijeras' && accionPlayer_2.toLowerCase() === 'piedra' || accionPlayer_2.toLowerCase() === 'tijeras' && accionPlayer_1.toLowerCase() === 'piedra') {
            if (accionPlayer_1.toLowerCase() === 'piedra' && accionPlayer_2toLowerCase() === 'tijeras') {
                puntaje_1 = puntaje_1 + 1;
            } else {
                puntaje_2 = puntaje_2 + 1;
            }
        }
        document.write(`Las tiradas en la ronda ${i + 1} fueron: <br> ${name_1} = ${accionPlayer_1.toUpperCase()} y ${name_2} = ${accionPlayer_2.toUpperCase()} <br>`)
    }
    if (puntaje_1 === puntaje_2) {
        document.write(`Quedaron empate`);
    } else {
        if (puntaje_1 > puntaje_2) {
            document.write(`Gano el jugador ${name_1} con ${puntaje_1} puntos`);
        } else {
            document.write(`Gano el jugador ${name_2} con ${puntaje_2} puntos`);
        }
    }
}