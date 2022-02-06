var button = document.querySelector('.inventory-submit-button')

button.addEventListener('click', (name, numItems) => {
    let newItem = {
        name: name,
        numItems: numItems,
        items:[]
    }
    localStorage.setItem(name, JSON.stringify(newItem))
})