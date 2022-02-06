var button = document.querySelector('.inventory-submit-button')

button.addEventListener('click', (name, numItems, quantity, expiration, price ) => {
    let newItem = {
        name: name,
        numItems: numItems,
        quantity: quantity,
        expiration: expiration,
        price: price
    }
    localStorage.setItem(name, JSON.stringify(newItem))
})
