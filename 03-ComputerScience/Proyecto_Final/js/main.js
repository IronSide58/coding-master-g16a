let dataBase = JSON.parse(poke_file);
let pokemones = dataBase.result;
let search_btn = document.getElementById('search-btn');
let container_cards = document.querySelector('#container-cards');
let filtro = [];
let arrayFilter = [];
let arrayFilterNames = [];
let sortFilterType = [];
let filterCheckedSort = [];
$(document).ready(function() {
    $('[name="checks[]"]').click(function() {
        arrayFilter = $('[name="checks[]"]:checked').map(function(){
            return this.value;
        }).get();
    });
});
/*---------------------------- Funciones -------------------------------------*/
function search() {
    let datos;
    arrayFilterNames = searchName(search_btn.value);
    filtro = [];
    for (let i = 0; i < pokemones.length; i++) {
        if (arrayFilterNames.length !== 0 || arrayFilter.length !== 0) {
            if (arrayFilterNames.length !== null) {
                for (let j = 0; j < arrayFilterNames.length; j++) {
                    if (arrayFilterNames[j] === pokemones[i].name) {
                        sortFilterType.push(pokemones[i].slug);
                        datos = obtenerDatos(i);
                        filtro.push(datos);
                    }
                }
            }
            if (arrayFilter.length !== null) {
                for (let j = 0; j < arrayFilter.length; j++) {
                    for (let k = 0; k < pokemones[i].type.length; k++) {
                        if (arrayFilter[j] === pokemones[i].type[k]) {
                            sortFilterType.push(pokemones[i].slug);
                            datos = obtenerDatos(i);
                            filtro.push(datos);
                        }
                    }
                }
            }
        } else {
            datos = obtenerDatos(i);
            filtro.push(datos);
        }
    }
    // container_cards.innerHTML = "";
    print(filtro);
}
/*------------------Imprime cards en pantalla--------------------*/
function print(filtro) {
    container_cards.innerHTML = "";
    for (let i = 0; i < filtro.length; i++) {
        container_cards.insertAdjacentHTML("beforeend",filtro[i]);
    }
}
/*------------------Ordenamiento--------------------*/
function sortPokemon(flag) {
    let aux = [];
    if (flag === 1) {
        if (sortFilterType.length === 0) {
            for (let i = 0; i < pokemones.length; i++) {
                aux.push(pokemones[i].slug);
            }
            aux.sort();
            print(validar(aux));
        } else {
            sortFilterType.sort();
            print(validar(sortFilterType));
        }
    } if (flag === 2) {
        if (sortFilterType.length === 0) {
            for (let i = 0; i < pokemones.length; i++) {
                aux.push(pokemones[i].slug);
            }
            aux.sort().reverse();
            print(validar(aux));
        } else {
            sortFilterType.sort().reverse();
            print(validar(sortFilterType));
        }
    }
}
function validar(array) {
    let data; let arraySort = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < pokemones.length; j++) {
            if (array[i] === pokemones[j].slug) {
                data = obtenerDatos(j);
                arraySort.push(data);
                break
            }
        }
    }
    return arraySort;
}
/*------------Almacena los datos (input) en un array--------------*/
function searchName(string) {
    let arr2 = []
    if (string !== "") {
        let arr = string.split(', ');
        for (let i = 0; i < arr.length; i++) {
            arr2.push(arr[i][0].toUpperCase() + arr[i].substring(1))
        }
    } else {
        arr2 = []
    }
    return arr2;
}
/*-----------------Añade color al valor "type"--------------------*/
function getType(index) {
    let typeUppe = [];
    let string = "";
    for (let i = 0; i < pokemones[index].type.length; i++) {
        typeUppe.push(`<div class="rounded col-5 typeStyle" style="${background(pokemones[index].type[i])}">${pokemones[index].type[i][0].toUpperCase() + pokemones[index].type[i].substring(1)}</div>`);
        string += typeUppe[i];
    }
    return string;
}
/*------------------Añade abilities y weakness-------------------*/
function getList(data,flag) {
    let text = "";
    if (flag === 1) {
        for (let i = 0; i < pokemones[data].abilities.length; i++) {
            text += `<li>${pokemones[data].abilities[i]}</li>`;
        }
    } else if(flag === 2) {
        for (let i = 0; i < pokemones[data].weakness.length; i++) {
            text += `<articule class="rounded col-5" style="${background(pokemones[data].weakness[i].toLowerCase())} margin: 2px 5px;">${pokemones[data].weakness[i]}</articule>`;
        }
    }
    return text;
}
/*-------------------Valida el Pokemon type---------------------*/
function background(type) {
    if (type === 'steel') {
        return 'background-color: #9eb7b8;'
    } if (type === 'bug') {
        return 'background-color: #729f3f; color: white;'
    } if (type === 'dragon') {
        return 'background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%); color: white;'
    } if (type === 'fairy') {
        return 'background-color: #fdb9e9;'
    } if (type === 'fire') {
        return 'background-color: #fd7d24; color: white;'
    } if (type === 'ghost') {
        return 'background-color: #7b62a3; color: white;'
    } if (type === 'ground') {
        return 'background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%); color: white;'
    } if (type === 'normal') {
        return 'background-color: #a4acaf; color: white;'
    } if (type === 'psychic') {
        return 'background-color: #f366b9; color: white;'
    } if (type === 'dark') {
        return 'background-color: #707070; color: white;'
    } if (type === 'electric') {
        return 'background-color: #eed535; color: white;'
    } if (type === 'fighting') {
        return 'background-color: #d56723; color: white;'
    } if (type === 'flying') {
        return 'background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%); color: white;'
    } if (type === 'grass') {
        return 'background-color: #9bcc50; color: white;'
    } if (type === 'ice') {
        return 'background-color: #51c4e7; color: white;'
    } if (type === 'poison') {
        return 'background-color: #b97fc9; color: white;'
    } if (type === 'rock') {
        return 'background-color: #a38c21; color: white;'
    } if (type === 'water') {
        return 'background-color: #4592c4; color: white;'
    }
}
/*---------------------Retorna la card--------------------------*/
function obtenerDatos(i) {
    return `
        <div class="col">
            <div class="card h-60">
                <div class="container w-100 text-center bg-gradient rounded" style="background-color: #F2F2F2">
                    <img src="${pokemones[i].ThumbnailImage}" class="card-img-top" style="width: 8rem;" alt="${pokemones[i].name}">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center fw-bolder">${pokemones[i].name}</h5>
                    <div class="container card-text fw-bolder w-100 text-center">
                        <div class="row justify-content-center">
                            ${getType(i)}
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#${pokemones[i].name + i}Modal">Más información</button>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <section class="modal fade" id="${pokemones[i].name + i}Modal" tabindex="-1" aria-hidden="true">
            <section class="modal-dialog">
                <section class="modal-content">
                    <section class="modal-header">
                        <h4 class="modal-title text-center fw-bolder" id="name">${pokemones[i].name}</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </section>
                    <section class="modal-body">
                        <section class="container text-center backgroundModal rounded">
                            <img src="${pokemones[i].ThumbnailImage}" class="card-img-top rounded mx-auto" style="width: 10rem;" alt="${pokemones[i].name}">
                        </section>
                        <section class="container" style="margin-top: 5px;">
                            <div class="row justify-content-center">
                                <div class="container card-text fw-bolder w-50 text-center">
                                    <div class="row justify-content-center">
                                        ${getType(i)}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h3>ID: ${pokemones[i].id}</h3>
                                </div>
                                <div class="col">
                                    <h3>Peso: ${pokemones[i].weight}</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="card">
                                        <h3 class="card-title text-center">Habilidades</h3>
                                        <div class="items">
                                            <ul>
                                                ${getList(i, 1)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <h3 class="card-title text-center" style="margin-bottom: 0;">Debilidades</h3>
                                        <div class="items" style="margin-bottom: 5px;">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    ${getList(i, 2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section class="modal-footer">
                        <button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>
                    </section>
                </section>
            </section>
        </section>`
}