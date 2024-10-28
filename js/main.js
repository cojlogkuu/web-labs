import { getStoneValues, clearInputs, renderAllItems, addItem, filterStones, clearFindInputs, countPrice } from "./dom_utils.js";

const submitButton = document.getElementById('submit_button');
const findButton = document.getElementById('find_button');
const cancelButton = document.getElementById('cancel_button');
const countButton = document.getElementById('count_button');
const modalWindow = document.getElementById('modal_window');
const closeModalButton = modalWindow.querySelector('.modal__close');


let stoneItems = [];

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const newStone = getStoneValues();
    if (!newStone) return;

    stoneItems.push(newStone);
    addItem(newStone);
    clearInputs();
});

findButton.addEventListener('click', () => {
    const filtredItems = filterStones(stoneItems);
    renderAllItems(filtredItems);
});

cancelButton.addEventListener('click', () => {
    clearFindInputs();
    renderAllItems(stoneItems);
});

countButton.addEventListener('click', countPrice);

export function deleteItem (idToDelete) {
    stoneItems = stoneItems.filter(item => item.id !== idToDelete);
    return stoneItems;
};

closeModalButton.addEventListener('click', () => modalWindow.classList.remove('show'));

export function getItemsList () {
    return stoneItems
}

