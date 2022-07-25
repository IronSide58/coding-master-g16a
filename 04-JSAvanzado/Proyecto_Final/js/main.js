"use strict";
const select_categories = document.getElementById("select_categories");
const select_difficulty = document.getElementById("difficulty");
const select_type = document.getElementById("select_type");
const main_button = document.getElementById("main_button");

const urlCategories = 'https://opentdb.com/api_category.php';
const urlMain = 'https://opentdb.com/api.php?amount=10' //&category=21&difficulty=medium&type=boolean

const generateOption = ((name, id) => {
    let option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    select_categories.appendChild(option);
});

const getCategories = () => {
    fetch(urlCategories).then((response) => {
        return response.json();
    }).then((data) => {
        data.trivia_categories.forEach(element => {
            generateOption(element.name, element.id);
        });
    }).catch((error) => {
        console.error('Error fetch', error);
    });
}

const generateTrivia = () => {
    let array = [select_difficulty.value, select_categories.value, select_type.value];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'any') {
            array.splice(i, 1);
            i -= 1;
        }
    }
}
main_button.addEventListener('click', () => {
    generateTrivia();
});
getCategories();