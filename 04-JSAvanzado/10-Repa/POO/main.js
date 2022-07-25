"use strict";

/** Molde **/
class Animal {
    constructor(especie, color, sonido) {
        this.especie =  especie,
        this.color = color,
        this.sonido = sonido
    }
    emitirSonido() {
        return console.log('Mi sonido es: ', this.sonido);
    }
}

const jirafa = new Animal('Mamifero', 'Amarillo y Negro', null);
const leon = new Animal('Felino', 'Amarillo', 'Gruñir');

console.log(jirafa.especie);
console.log(jirafa.color);
jirafa.emitirSonido();