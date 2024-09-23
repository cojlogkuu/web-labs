import { deleteItem } from "./main.js";
import { checkName, checkDescription, checkPrice } from "./utils.js";

const nameInput = document.getElementById('name_input');
const descInput = document.getElementById('description_input');
const typeSelect = document.getElementById('type_select');
const priceInput = document.getElementById('price_input');
const itemsContainer = document.getElementById('items-container');
const textFindInput = document.getElementById('text_find');
const typeSelectFind = document.getElementById('type_find');
const modalWindow = document.getElementById('modal_window');

const itemTemplate = ({ id, name, desc, type, price}, img) => `
                <li id=${id}>
                    <img src=${img} alt="">
                    <div class="item__text">
                        <div class="text__info">
                            <span class="name">${name}</span>
                            <span class="price">${price}$</span>
                            <span class="type">${type}</span>
                        </div>
                        <p>${desc}</p>
                    </div>
                    <button class="item__delete">Delete</button>
                </li>
`

export function showModalWindow ( {title, text} ) {
    const h2 = modalWindow.querySelector('h2');
    const p = modalWindow.querySelector('p');
    h2.innerText = title;
    p.innerText = text;
    modalWindow.classList.add('show');
};

export function getPetsValues () {
    const id = uuid.v1();

    let alertMessage;

    alertMessage = checkName(nameInput.value);
    if (alertMessage) {
        showModalWindow(alertMessage);
        return
    };

    alertMessage = checkDescription(descInput.value);
    if (alertMessage) {
        showModalWindow(alertMessage);
        return
    };

    alertMessage = checkPrice(priceInput.value);
    if (alertMessage) {
        showModalWindow(alertMessage);
        return
    };

    return {
        id: id,
        name: nameInput.value,
        desc: descInput.value,
        type: typeSelect.value,
        price: priceInput.value,
    }
};

export function clearInputs () {
    nameInput.value = descInput.value = priceInput.value = '';
};

export function clearFindInputs () {
    textFindInput.value = '';
    typeSelectFind.value = 'all';
}

export function renderAllItems (items) {
    itemsContainer.innerHTML = '';
    for (const item of items) addItem(item);
};

export function filterPets (petArray) {
    let filtredPets;

    if (typeSelectFind.value !== 'all') {
        filtredPets = petArray.filter(pet => pet.type === typeSelectFind.value)
    } else {
        filtredPets = petArray;
    };

    filtredPets = filtredPets.filter(pet => 
        pet.name.search(textFindInput.value) !== -1);
    
    return filtredPets;
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
        const items = deleteItem(id);
        renderAllItems(filterPets(items));
    });
};

export function countPrice () {
    const items = itemsContainer.querySelectorAll('li .price');
    let price = 0;
    items.forEach(item => price += +item.innerText.slice(0, -1));

    showModalWindow( {
        title: 'Total price',
        text: `Total price of all pets is ${price}$.`
    } );
};