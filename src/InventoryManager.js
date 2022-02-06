function InventoryManager() {

    let addButton = document.querySelector('.add-button')
    let cancelButton = document.querySelector('.inventory-cancel-button')
    let submitButton = document.querySelector('.inventory-submit-button')
    let myModal = new bootstrap.Modal(document.getElementById("myModal"));

    let nameInput = document.querySelector('#inventory-name')
    let sizeInput = document.querySelector('#inventory-size')

    addButton.addEventListener('click', () => {
        myModal.show();
    })

    cancelButton.addEventListener('click', () => {
        myModal.hide()
    })

    submitButton.addEventListener('click', () => {
        addInventoryCard(nameInput.value, sizeInput.value)
        myModal.hide()
    })
}

function getInventory(invName){ 
    //array -> string    
    //string -> array
    return JSON.parse(localStorage.getItem('Inventories')).find(inv => inv.name == invName)        
}