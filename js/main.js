import {getStoneValues, renderAllItems, clearInputs, getFindValues, clearFindInputs, countPrice} from "./dom_utils.js";
import {getItems, addNewItem, deleteItem} from "./api.js";

const submitButton = document.getElementById('submit_button');
const findButton = document.getElementById('find_button');
const cancelButton = document.getElementById('cancel_button');
const countButton = document.getElementById('count_button');
const modalWindow = document.getElementById('modal_window');
const closeModalButton = modalWindow.querySelector('.modal__close');


submitButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const newStone = getStoneValues();
    clearInputs();
    if (!newStone) return;
    await addNewItem(newStone);

    const items = await getItems();
    renderAllItems(items);
});

findButton.addEventListener('click', async () => {
    const findValues = getFindValues();
    const items = await getItems(findValues.name, findValues.type, findValues.sort);
    renderAllItems(items);
});

cancelButton.addEventListener('click', async () => {
    clearFindInputs();
    const items = await getItems();
    renderAllItems(items);
});

countButton.addEventListener('click', countPrice);

export async function deleteStone(idToDelete) {
    await deleteItem(idToDelete);

    const findValues = getFindValues();
    const items = await getItems(findValues.name, findValues.type, findValues.sort);
    renderAllItems(items);
}

//
closeModalButton.addEventListener('click', () => modalWindow.classList.remove('show'));
//
// export function getItemsList () {
//     return stoneItems
// }

getItems().then(items => renderAllItems(items));



