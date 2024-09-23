export function checkName (name) {
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
};

export function checkDescription (desc) {
    if (desc.length < 5)
        return {
            title: 'Wrong description',
            text: 'Description cant be less then 5 symbols',
            }
};

export function checkPrice (price) {
    price = +price;
    if (price <=0)
        return {
            title: 'Wrong price',
            text: 'Price cant be 0 and below',
            }
    if (price > 1000000)
        return {
            title: 'Wrong price',
            text: 'Animal cannot be worth that much',
            }
};