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

function getItems(invName, itemName) {
    return getInventory(invName, itemName).items
}

function getItem(invName, itemName) { 
    let items = getItems(invName, itemName)
    
    let result = undefined

    for(var index in items) {


        if(items[index].name == itemName) {
            result = items[index]
        }
    }

    return result
}

function getBatches(invName, itemName) { 
    return getItem(invName, itemName).batches
}
/* Don't really need this rlly
function getBatch(invName, itemName){ 

    console.log(getBatches(invName, itemName))

    return getBatches(invName, itemName).find((element) => {
        element.name == itemName
    })
}*/

//Array.find(  (index, index) => {//condition }    )

function getMinExp(invName, itemName) {

    let batches = getBatches(invName, itemName)
    
    return batches[0].expiration
}

function getMaxExp(invName, itemName){
    let batches = getBatches(invName, itemName)

    return batches[batches.length-1].expiration
}

