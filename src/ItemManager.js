var invName = "Safeway"
var selected = ''

function ItemManager() {
    let submitButton = document.querySelector('.item-submit-button')
    let cancelButton = document.querySelector('.item-cancel-button')
    let myModal = new bootstrap.Modal(document.querySelector(".myModal2"));
    let addButton = document.querySelector('.add-button')

    let changeButton = document.querySelector('#quantity-change-button')

    addButton.addEventListener('click', (e) => {
        e.preventDefault()

        myModal.show();
    })

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault()

        myModal.hide()
    })

    submitButton.addEventListener('click', (e) => {
        e.preventDefault()

        myModal.hide()
        let name = document.querySelector('#item-name').value
        let price = document.querySelector('#price-input').value
        let quantity = document.querySelector('#initial-size-input').value
        let expiration = document.querySelector('#shelf-life-input').value
        addItem(invName, name, parseInt(price), parseInt(quantity), parseInt(expiration))
        addItemCard(name, price, quantity)
    })

    changeButton.addEventListener('click', (e) => {
        e.preventDefault()
        let change = parseInt(document.querySelector('.new-value').value)



        editItem("Safeway", selected, change)

        rerender()
    })
}

ItemManager()

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

function getMinExp(invName, itemName) {

    let batches = getBatches(invName, itemName)
    
    return batches[0].expiration
}

function getMaxExp(invName, itemName){
    let batches = getBatches(invName, itemName)

    return batches[batches.length-1].expiration
}

function getAllData() {
    return JSON.parse(localStorage.getItem('Inventories'))
}

function updateBatches(data) {

    data.forEach((inventory, invI)=> {

        let numItems = 0

        inventory.items.forEach((item, itI) => {
            let numOfCurrentItems = 0
            item.batches.forEach((batch, baI) => {
                numOfCurrentItems += batch.number
            })
            
            item.quantity = numOfCurrentItems
            numItems += numOfCurrentItems
        })

        inventory.size = numItems
    })

    return data
}

function removeItem(invName, name) {

    data = getAllData()

    data.find(obj => obj.name == invName).items = 
    data.find(obj => obj.name == invName).items.filter(obj => {
        return obj.name != name
    })
    console.log(name)

    updateBatches(data)

    //then updates the total size as well as the item size
    localStorage.setItem("Inventories", JSON.stringify(data))
    rerender()
}

function editItem(invName, itemName, quantity) {
    let data = getAllData()
    let oldVal = data.find(obj => obj.name == invName).items.find(obj => obj.name == itemName).quantity
    let expiration = data.find(obj => obj.name == invName).items.find(obj => obj.name == itemName).expiration
    let price = data.find(obj => obj.name == invName).items.find(obj => obj.name == itemName).price

    let newVal = oldVal + quantity
    
    newVal = newVal < 0 ? -oldVal : quantity

    data.find(obj => obj.name == invName).items.find(obj => obj.name == itemName).batches.push({
        number: newVal < 0 ? -oldVal : quantity,
        expiration: dayNumber+expiration
    })

    let sales = localStorage.getItem(itemName+"sales") == null ? 0 : localStorage.getItem(itemName+"sales")
    let money = localStorage.getItem(itemName+"money") == null ? 0 : localStorage.getItem(itemName+"money")

    localStorage.setItem(itemName+"sales", parseInt(sales) + (newVal))
    localStorage.setItem(itemName+"money", parseInt(money) + ((-newVal) * price))

    console.log(localStorage.getItem("sales"))

    updateBatches(data)

    //then updates the total size as well as the item size
    localStorage.setItem("Inventories", JSON.stringify(data))
    rerender()
}

function addItem(invName, name, price, quantity, expiration) {
    let data = getAllData()

    let newItem = {
        name:name,
        quantity: quantity,
        price: price,
        batches: [
            {
                number: quantity,
                expiration: dayNumber+expiration
            }
        ]
    }

    data.find(obj => obj.name == invName).items.push(newItem)

    updateBatches(data)

    //then updates the total size as well as the item size
    localStorage.setItem("Inventories", JSON.stringify(data))

}