export function checkName(name) {
    if (name.length === 0)
        return {
            title: 'Wrong name',
            text: 'Fill in the name input field',
        }

    if (!/[A-Za-z]/.test(name.charAt(0)))
        return {
            title: 'Wrong name',
            text: 'First symbol of name should be letter',
        }
}

export function checkCarat(carat) {
    carat = +carat;
    if (carat <= 0)
        return {
            title: 'Wrong carat',
            text: 'Carat cant be 0 and below',
        }
    if (carat > 5000)
        return {
            title: 'Wrong carat',
            text: 'Stone cannot have that many carats',
        }
}

export function checkPrice(price) {
    price = +price;
    if (price <= 0)
        return {
            title: 'Wrong price',
            text: 'Price cant be 0 and below',
        }
}