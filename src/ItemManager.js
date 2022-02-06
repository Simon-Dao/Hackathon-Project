var button = document.querySelector('.inventory-submit-button')

button.addEventListener('click', (name, quantity, expiration, price, batch) => {
    let newItem = {
        name: name,
        batch: batch,
        quantity: quantity,
        expiration: expiration,
        price: price
    }
    localStorage.setItem(name, JSON.stringify(newItem))
})

button.addEventListener('click', (name, quantity, expiration, batch) => {
    let newBatch = {
        name: name,
        batch: batch,
        quantity: quantity,
        expiration: expiration,
    }
    localStorage.setItem(name, JSON.stringify(newBatch))
})

function getItem(invName, itemName) { 
    return getInventory(invName).find((element, index) => {
        element === itemName
    })

}


function getBatches(invName, itemName) { 
    return getItem(invName, itemName).find((element, index) => {element === itemName}).batches
}


function getBatch(batches, batchName){ 
    return getItem(batchName).find((element, index) => {
        element === batchName
    })
}

//Array.find(  (element, index) => {//condition }    )

function getMinExp(invName, itemName) {
    return getInventory(itemName).find((element, index) => {
        element < 10
    })
}

function getMaxExp(invName, itemName){}
