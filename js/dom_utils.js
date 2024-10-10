import {deleteStone, updateStone} from "./main.js";
import {checkName, checkPrice, checkCarat} from "./utils.js";

const nameInput = document.getElementById('name_input');
const caratInput = document.getElementById('carat_input');
const typeSelect = document.getElementById('type_select');
const priceInput = document.getElementById('price_input');
const itemsContainer = document.getElementById('items-container');
const textFindInput = document.getElementById('text_find');
const typeSelectFind = document.getElementById('type_find');
const modalWindow = document.getElementById('modal_window');
const radiosSort = document.getElementsByName('carat_sorting');


const itemTemplate = ({id, name, carats, type, price}, img) => `
                <li id=${id}>
                    <img src=${img} alt="">
                    <div class="item__text">
                        <div class="text__info">
                            <span class="name">${name}</span>
                            <span class="price">${price}$</span>
                            <span class="type">${type}</span>
                        </div>
                        <p>Stone has <span>${carats}</span> carats</p>
                    </div>
                    <button class="item__delete">Delete</button>
                    <button class="item__update">Update</button>
                </li>
`

export function showModalWindow({title, text}) {
    const h2 = modalWindow.querySelector('h2');
    const p = modalWindow.querySelector('p');
    h2.innerText = title;
    p.innerText = text;
    modalWindow.classList.add('show');
};

export function getStoneValues() {

    let alertMessage;

    alertMessage = checkName(nameInput.value);
    if (alertMessage) {
        showModalWindow(alertMessage);
        return
    }

    alertMessage = checkPrice(priceInput.value);
    if (alertMessage) {
        showModalWindow(alertMessage);
        return
    }

    alertMessage = checkCarat(caratInput.value);
    if (alertMessage) {
        showModalWindow(alertMessage);
        return
    }

    return {
        name: nameInput.value,
        carats: caratInput.value,
        type: typeSelect.value,
        price: priceInput.value,
    }
}

export function getFindValues() {
    let selectedSort;
    for (const radio of radiosSort) {
        if (radio.checked) {
            selectedSort = radio.value;
            break;
        }
    }
    return {
        name: textFindInput.value.trim(),
        type: typeSelectFind.value,
        sort: selectedSort,
    }
}

export function getUpdateValues() {
    let alertMessage;
    let name, carats, price;
    name = carats = price = null;

    if (nameInput.value.trim() !== ''){
        alertMessage = checkName(nameInput.value.trim());
        if (alertMessage) {
            showModalWindow(alertMessage);
            return
        } else {
            name = nameInput.value.trim();
        }
    }

    if (caratInput.value.length > 0) {
        alertMessage = checkCarat(caratInput.value);
        if (alertMessage) {
            showModalWindow(alertMessage);
            return
        } else {
            carats = caratInput.value;
        }
    }

    if (priceInput.value.length > 0) {
        alertMessage = checkPrice(priceInput.value);
        if (alertMessage) {
            showModalWindow(alertMessage);
            return
        } else {
            price = priceInput.value;
        }
    }

    return {
        name: name,
        carats: carats,
        type: typeSelect.value,
        price: price,
    }
}



export function clearInputs() {
    nameInput.value = caratInput.value = priceInput.value = '';
};

export function clearFindInputs() {
    textFindInput.value = '';
    typeSelectFind.value = 'all';
    document.getElementById('not_sort').checked = true;
}

export function renderAllItems(items) {
    itemsContainer.innerHTML = '';
    for (const item of items) addItem(item);
}

export function addItem({id, name, carats, type, price}) {
    let img = '';
    if (type === 'diamond') img = './img/diamond.jpg';
    if (type === 'sapphire') img = './img/sapphire.jpg';
    if (type === 'emerald') img = './img/emerald.jpg';
    if (type === 'ruby') img = './img/ruby.jpg';

    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({id, name, carats, type, price}, img)
    );

    const deleteButton = itemsContainer.querySelector(`li[id="${id}"] .item__delete`);

    deleteButton.addEventListener('click', async () => {
        await deleteStone(id);
    });

    const updateButton = itemsContainer.querySelector(`li[id="${id}"] .item__update`);

    updateButton.addEventListener('click', async () => {
        await updateStone(id);
    })
}

export function countPrice() {
    const items = itemsContainer.querySelectorAll('li .price');
    let price = 0;
    items.forEach(item => price += +item.innerText.slice(0, -1));

    showModalWindow({
        title: 'Total price',
        text: `Total price of all stones is ${price}$.`
    });
}