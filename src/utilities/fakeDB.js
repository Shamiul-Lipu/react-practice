// use local storage to manage cart data
let cart = {};
const stored = JSON.parse(localStorage.getItem('set-item'));

const addToLocacl = (id) => {

    if (stored) {
        cart = stored;
    }

    const quantity = cart[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        cart[id] = newQuantity;
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem('set-item', JSON.stringify(cart));

}

const removeFromLocal = (id) => {
    if (stored) {
        const parseCart = stored;
        if (id in parseCart) {
            delete parseCart[id];
            localStorage.setItem('set-item', JSON.stringify(cart));
        }
    }
}

export { addToLocacl, removeFromLocal }