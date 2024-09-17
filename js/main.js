import { getPetsValues, clearInputs, addItem, renderAllItems } from "./dom_utils.js";

const submitButton = document.getElementById('submit_button');
const findButton = document.getElementById('find_button');
const textFindInput = document.getElementById('text_find');
const cancelButton = document.getElementById('cancel_button');

let petItems = [];

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    const newPet = getPetsValues();

    petItems.push(newPet);
    addItem(newPet);
    clearInputs();
});

findButton.addEventListener('click', () => {
    const filtredPets = petItems.filter(pet => 
        pet.name.search(textFindInput.value) !== -1);

    renderAllItems(filtredPets);
});

cancelButton.addEventListener('click', () => {
    textFindInput.value = '';
    renderAllItems(petItems);
});


