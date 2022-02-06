

window.addEventListener('DOMContentLoaded', () => {
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
        myModal.hide()
    })
})