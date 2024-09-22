import { getPetsValues, clearInputs, renderAllItems, addItem } from "./dom_utils.js";

const submitButton = document.getElementById('submit_button');
const findButton = document.getElementById('find_button');
const textFindInput = document.getElementById('text_find');
const typeSelectFind = document.getElementById('type_find');
const cancelButton = document.getElementById('cancel_button');
const countButton = document.getElementById('count_button');

let petItems = [];

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const newPet = getPetsValues();

    petItems.push(newPet);
    addItem(newPet);
    clearInputs();
});

let filtredPets = [];

function filterPets () {
    if (typeSelectFind.value !== 'all') {
        filtredPets = petItems.filter(pet => pet.type === typeSelectFind.value)
    } else {
        filtredPets = petItems;
    };


    filtredPets = filtredPets.filter(pet => 
        pet.name.search(textFindInput.value) !== -1);

    renderAllItems(filtredPets);
}

findButton.addEventListener('click', () => {
    filterPets();
});

cancelButton.addEventListener('click', () => {
    textFindInput.value = '';
    typeSelectFind.value = 'all';
    filtredPets = [];
    renderAllItems(petItems);
});

countButton.addEventListener('click', () => {
    filterPets();
    let totalPrice = 0;
    filtredPets.forEach(pet => totalPrice += +pet.price);
    alert(`Total price of pets is ${totalPrice}$`);
});



