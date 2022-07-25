'use strict';
const { v4: uuidv4 } = require('uuid');

const input_todo = document.getElementById('input-todo');
const btn_add = document.getElementById('btn-add');
const content_wrapper = document.getElementById('content-wrapper');

const url = 'http://localhost:3000/data';

const printTask = (task, id) => {
    let li = document.createElement('li');
    li.dataset.id = id;
    li.textContent = task;
    const btn_edit = document.createElement('button');
    const btn_delete = document.createElement('button');
    btn_edit.textContent = 'Editar';
    btn_delete.textContent = 'Eliminar';

    btn_edit.addEventListener('click', () => {
        let newTask = prompt('Ingresa la nueva tarea: ');
        putData(id, newTask);
    });
    btn_delete.addEventListener('click', () => {
        deleteData(id);
    });

    li.appendChild(btn_edit);
    li.appendChild(btn_delete);

    content_wrapper.appendChild(li);
};

const getData = () => {
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        data.forEach(element => {
            printTask(element.task, element.id);
        });
    }).catch((error) => {
        console.error('Error: ', error);
    });
};
const postData = (task) => {
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": uuidv4(),
            "task": `${task}`
        })
    })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch((error) => console.error(error));
}
btn_add.addEventListener('click', () => {
    input_todo.value !== '' ? postData(input_todo.value) : alert('Agrega una tarea');
});
const putData = (id, task) => {
    fetch(url + '/' + id, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "task": `${task}`
        }),
    })//.then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.error(err))
};
const deleteData = (id) => {
    fetch(url + '/' + id, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json'
        }
    })//.then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.error(err))
};
getData();