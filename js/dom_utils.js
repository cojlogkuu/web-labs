import { deleteItem, getItemsList } from "./main.js";
import { checkName, checkPrice } from "./utils.js";

const nameInput = document.getElementById('name_input');
const caratInput = document.getElementById('carat_input');
const typeSelect = document.getElementById('type_select');
const priceInput = document.getElementById('price_input');
const itemsContainer = document.getElementById('items-container');
const textFindInput = document.getElementById('text_find');
const typeSelectFind = document.getElementById('type_find');
const modalWindow = document.getElementById('modal_window');
const radiosSort = document.getElementsByName('carat_sorting');


const itemTemplate = ({ id, name, carat, type, price}, img) => `
                <li id=${id}>
                    <img src=${img} alt="">
                    <div class="item__text">
                        <div class="text__info">
                            <span class="name">${name}</span>
                            <span class="price">${price}$</span>
                            <span class="type">${type}</span>
                        </div>
                        <p>Stone has <span>${carat}</span> carats</p>
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

export function getStoneValues () {
    // const list = getItemsList();
    // console.log(list);
    // let id;
    // if (list.length === 0) {        
    //     id = 0;
    // } else {
    //     id = list[list.length - 1].id + 1;
    // }

    const id = uuid.v1();

    let alertMessage;

    alertMessage = checkName(nameInput.value);
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
        carat: caratInput.value,
        type: typeSelect.value,
        price: priceInput.value,
    }
};

export function clearInputs () {
    nameInput.value = caratInput.value = priceInput.value = '';
};

export function clearFindInputs () {
    textFindInput.value = '';
    typeSelectFind.value = 'all';
    document.getElementById('not_sort').checked = true;
}

export function renderAllItems (items) {
    itemsContainer.innerHTML = '';
    for (const item of items) addItem(item);
};

export function filterStones (stoneArray) {
    let selectedSort;
    for (const radio of radiosSort) {
        if (radio.checked) {
            selectedSort = radio.value;
            break;
        }
    }

    let filtredStones;

    if (typeSelectFind.value !== 'all') {
        filtredStones = stoneArray.filter(stone => stone.type === typeSelectFind.value)
    } else {
        filtredStones = stoneArray;
    };

    filtredStones = filtredStones.filter(stone => 
        stone.name.search(textFindInput.value.trim().toLowerCase()) !== -1);

    if (selectedSort === 'descending') {
        filtredStones.sort((a,b) => +a.carat - +b.carat);
    } 
    if (selectedSort === 'ascending') {
        filtredStones.sort((a,b) => +b.carat - +a.carat);
    }
    
    return filtredStones;
}

export function addItem({ id, name, carat, type, price}) {
    let img = '';
    if (type === 'diamond') img = './img/diamond.jpg';
    if (type === 'sapphire') img = './img/sapphire.jpg';
    if (type === 'emerald') img = './img/emerald.jpg';
    if (type === 'ruby') img = './img/ruby.jpg';

    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, carat, type, price }, img)
    );

    const deleteButton = itemsContainer.querySelector(`li[id="${id}"] .item__delete`);

    deleteButton.addEventListener('click', () => {
        const items = deleteItem(id);
        renderAllItems(filterStones(items));
    });
};

export function countPrice () {
    const items = itemsContainer.querySelectorAll('li .price');
    let price = 0;
    items.forEach(item => price += +item.innerText.slice(0, -1));

    showModalWindow( {
        title: 'Total price',
        text: `Total price of all stones is ${price}$.`
    } );
};