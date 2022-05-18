let section_inicio = document.getElementById('inicio');
let section_login = document.getElementById('login');
let section_menu = document.getElementById('menu');
let section_saldo = document.getElementById('saldo');
let section_ingresar = document.getElementById('ingresar');
let section_retirar = document.getElementById('retirar');
let btn_login = document.getElementById('password');
var ing_value = document.getElementById('ingresar_monto');
var ret_value = document.getElementById('retirar_monto');
var flag = 0;
const id_name = document.querySelector('#id_name');
const txt_saldo = document.querySelector('#txt_saldo');
const txt_ing = document.querySelector('#txt_ing');
const txt_ret = document.querySelector('#txt_ret');
const result_ing = document.querySelector('#result_ing');
const result_ret = document.querySelector('#result_ret');

class persona {
    constructor (name, password, saldo){
        this.name = name;
        this.password = password;
        this.saldo = saldo;
    }
}

let user_1 = new persona('Gabriel', 'pas123', 250);
let user_2 = new persona('Samuel', 'sam4525', 10);
let user_3 = new persona('Abigail', 'abi_23', 990);

//------------------------------------ Funciones ---------------------------------
function consultar(number) {
    if (number === 1) {
        section_inicio.style.display = 'none';
        section_login.style.display = 'block';
        id_name.innerHTML = `<h3>${user_1.name}</h3>`;
        flag = 1;

    } else if (number === 2) {
        section_inicio.style.display = 'none';
        section_login.style.display = 'block';
        id_name.innerHTML = `<h3>${user_2.name}</h3>`;
        flag = 2;
    } else if (number === 3) {
        section_inicio.style.display = 'none';
        section_login.style.display = 'block';
        id_name.innerHTML = `<h3>${user_3.name}</h3>`;
        flag = 3;
    }
}

function login() {
    if (flag === 1) {
        if (password.value === user_1.password) {
            section_login.style.display = 'none';
            section_menu.style.display = 'block';
        } else {
            alert('Contraseña incorrecta, intentalo otra vez');
        }
    } else if (flag === 2) {
        if (password.value === user_2.password) {
            section_login.style.display = 'none';
            section_menu.style.display = 'block';
        } else {
            alert('Contraseña incorrecta, intentalo otra vez');
        }
    } else if (flag === 3) {
        if (password.value === user_3.password) {
            section_login.style.display = 'none';
            section_menu.style.display = 'block';
        } else {
            alert('Contraseña incorrecta, intentalo otra vez');
        }
    }
}

function consultar_Saldo() {
    if (flag === 1) {
        section_menu.style.display = 'none';
        section_saldo.style.display = 'block';
        txt_saldo.innerHTML = `<h1>Bienvenido ${user_1.name}</h1><p>El saldo actual en su cuenta es de:</p><strong>$${user_1.saldo}</strong>`;
    } else if (flag === 2) {
        section_menu.style.display = 'none';
        section_saldo.style.display = 'block';
        txt_saldo.innerHTML = `<h1>Bienvenido ${user_2.name}</h1><p>El saldo actual en su cuenta es de:</p><strong>$${user_2.saldo}</strong>`;
    } else if (flag === 3) {
        section_menu.style.display = 'none';
        section_saldo.style.display = 'block';
        txt_saldo.innerHTML = `<h1>Bienvenido ${user_3.name}</h1><p>El saldo actual en su cuenta es de:</p><strong>$${user_3.saldo}</strong>`;
    }
}

function ingresa_Monto() {
    if (flag === 1) {
        if (user_1.saldo < 990) {
            section_menu.style.display = 'none';
            section_ingresar.style.display = 'block';
            txt_ing.innerHTML = `<h1> Bienvenido ${user_1.name}`;
        } else {
            alert('Superaste la maxima cantidad que se puede ingresar');
        }
    } else if (flag === 2) {
        if (user_2.saldo < 990) {
            section_menu.style.display = 'none';
            section_ingresar.style.display = 'block';
            txt_ing.innerHTML = `<h1> Bienvenido ${user_2.name}`;
        } else {
            alert('Superaste la maxima cantidad que se puede ingresar');
        }
    } else if (flag === 3) {
        if (user_3.saldo < 990) {
            section_menu.style.display = 'none';
            section_ingresar.style.display = 'block';
            txt_ing.innerHTML = `<h1> Bienvenido ${user_3.name}`;
        } else {
            alert('Superaste la maxima cantidad que se puede ingresar');
        }
    }
}

function ingresar_Monto() {
    if (flag === 1) {
        user_1.saldo = user_1.saldo + Number(ing_value.value);
        items_ing.innerHTML = `<h1>Se ingreso la cantidad de $${ing_value.value} a su cuenta</h1>
        <label>Su nuevo saldo es de: $${user_1.saldo}</label> <section>
        <button class="btn_global_in" onclick="volver_ingresar()">Volver</button></section>`;
    } else if (flag === 2) {
        user_2.saldo = user_2.saldo + Number(ing_value.value);
        items_ing.innerHTML = `<h1>Se ingreso la cantidad de $${ing_value.value} a su cuenta</h1>
        <label>Su nuevo saldo es de: $${user_2.saldo}</label> <section>
        <button class="btn_global_in" onclick="volver_ingresar()">Volver</button></section>`;
    } else if (flag === 3) {
        user_3.saldo = user_3.saldo + Number(ing_value.value);
        items_ing.innerHTML = `<h1>Se ingreso la cantidad de $${ing_value.value} a su cuenta</h1>
        <label>Su nuevo saldo es de: $${user_3.saldo}</label> <section>
        <button class="btn_global_in" onclick="volver_ingresar()">Volver</button></section>`;
    }
}

function menu_Retirar() {
    if (flag === 1) {
        if (user_1.saldo > 10) {
            section_menu.style.display = 'none';
            section_retirar.style.display = 'block';
            txt_ret.innerHTML = `<h1> Bienvenido ${user_1.name} </h1>`;
        } else {
            alert('No puedes retirar la cantidad, no tienes fondos suficientes');
        }
    } else if (flag === 2) {
        if (user_2.saldo > 10) {
            section_menu.style.display = 'none';
            section_retirar.style.display = 'block';
            txt_ret.innerHTML = `<h1> Bienvenido ${user_2.name} </h1>`;
        } else {
            alert('No puedes retirar la cantidad, no tienes fondos suficientes');
        }
    } else if (flag === 3) {
        if (user_3.saldo > 10) {
            section_menu.style.display = 'none';
            section_retirar.style.display = 'block';
            txt_ret.innerHTML = `<h1> Bienvenido ${user_3.name}</h1>`;
        } else {
            alert('No puedes retirar la cantidad, no tienes fondos suficientes');
        }
    }
}
function retirar_Monto() {
    if (flag === 1) {
        user_1.saldo = user_1.saldo - Number(ret_value.value);
        result_ret.innerHTML = `<h1>Se retiro la cantidad de $${ret_value.value} de su cuenta</h1>
        <label>Su nuevo saldo es de: $${user_1.saldo}</label> <section>
        <button class="btn_global_in" onclick="volver_retirar()">Volver</button></section>`;
    } else if (flag === 2) {
        user_2.saldo = user_2.saldo - Number(ret_value.value);
        result_ret.innerHTML = `<h1>Se retiro la cantidad de $${ret_value.value} de su cuenta</h1>
        <label>Su nuevo saldo es de: $${user_2.saldo}</label> <section>
        <button class="btn_global_in" onclick="volver_retirar()">Volver</button></section>`;
    } else if (flag === 3) {
        user_3.saldo = user_3.saldo - Number(ret_value.value);
        result_ret.innerHTML = `<h1>Se retiro la cantidad de $${ret_value.value} de su cuenta</h1>
        <label>Su nuevo saldo es de: $${user_3.saldo}</label> <section>
        <button class="btn_global_in" onclick="volver_retirar()">Volver</button></section>`;
    }
}
function volver() {
    section_menu.style.display = 'block';
    section_saldo.style.display = 'none';
}
function volver_ingresar() {
    section_menu.style.display = 'block';
    section_ingresar.style.display = 'none';
}
function volver_retirar() {
    section_menu.style.display = 'block';
    section_retirar.style.display = 'none';
}
function logout() {
    section_menu.style.display = 'none';
    section_inicio.style.display = 'block';
}