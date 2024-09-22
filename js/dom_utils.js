const nameInput = document.getElementById('name_input');
const descInput = document.getElementById('description_input');
const typeSelect = document.getElementById('type_select');
const priceInput = document.getElementById('price_input');
const itemsContainer = document.getElementById('items-container');

export const itemTemplate = ({ id, name, desc, type, price}, img) => `
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

    const deleteButton = document.querySelector('.item__delete');
    deleteButton.addEventListener('click', (event) => {
        deleteId = event.target.closest('li').id;
        console.log(deleteId);
        petItems = petItems.filter(item => item.id !== deleteId);

        filterPets();
    });
}

export function getPetsValues () {
    const id = uuid.v1();

    return {
        id: id,
        name: nameInput.value,
        desc: descInput.value,
        type: typeSelect.value,
        price: priceInput.value,
    }
}

export function clearInputs () {
    nameInput.value = descInput.value = priceInput.value = '';
}

export function renderAllItems (items) {
    itemsContainer.innerHTML = '';
    for (const item of items) addItem(item);
}

