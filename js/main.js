import { getPetsValues, clearInputs, renderAllItems, itemTemplate } from "./dom_utils.js";

const submitButton = document.getElementById('submit_button');
const findButton = document.getElementById('find_button');
const textFindInput = document.getElementById('text_find');
const typeSelectFind = document.getElementById('type_find');
const cancelButton = document.getElementById('cancel_button');
const countButton = document.getElementById('count_button');
const itemsContainer = document.getElementById('items-container');

export let petItems = [];
export let filtredPets = [];

export function filterPets () {
    if (typeSelectFind.value !== 'all') {
        filtredPets = petItems.filter(pet => pet.type === typeSelectFind.value)
    } else {
        filtredPets = petItems;
    };


    filtredPets = filtredPets.filter(pet => 
        pet.name.search(textFindInput.value) !== -1);

    renderAllItems(filtredPets);
}

export function addItem({ id, name, desc, type, price}) {
    let img = '';
    if (type === 'monkey') img = './img/monkey.jpg';
    if (type === 'dog') img = './img/dog.jpg';
    if (type === 'pig') img = './img/pig.png';
    if (type === 'owl') img = './img/owl.jpg';

    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, desc, type, price }, img)
    );

    const deleteButton = itemsContainer.querySelector(`li[id="${id}"] .item__delete`);

    deleteButton.addEventListener('click', () => {
        petItems = petItems.filter(item => item.id !== id); // Виконає фільтрацію, але не переназначає petItems

        filterPets();
    });
};

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const newPet = getPetsValues();

    petItems.push(newPet);
    addItem(newPet);
    clearInputs();
});

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



