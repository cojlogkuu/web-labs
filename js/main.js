import { getPetsValues, clearInputs, renderAllItems, addItem, filterPets, clearFindInputs, countPrice } from "./dom_utils.js";

const submitButton = document.getElementById('submit_button');
const findButton = document.getElementById('find_button');
const cancelButton = document.getElementById('cancel_button');
const countButton = document.getElementById('count_button');
const modalWindow = document.getElementById('modal_window');
const closeModalButton = modalWindow.querySelector('.modal__close');


let petItems = [];

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const newPet = getPetsValues();
    if (!newPet) return;

    petItems.push(newPet);
    addItem(newPet);
    clearInputs();
});

findButton.addEventListener('click', () => {
    const filtredItems = filterPets(petItems);
    renderAllItems(filtredItems);
});

cancelButton.addEventListener('click', () => {
    clearFindInputs();
    renderAllItems(petItems);
});

countButton.addEventListener('click', countPrice);

export function deleteItem (idToDelete) {
    petItems = petItems.filter(item => item.id !== idToDelete);
    return petItems;
};

closeModalButton.addEventListener('click', () => modalWindow.classList.remove('show'));

