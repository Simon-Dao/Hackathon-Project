
function init() {
    /*
    let emptyText = document.createElement('h5')
    let main = document.querySelector('.main')
    main.append(emptyText)
*/
    var batch = {
        number: 15, 
        expiration: 7
    }

    var item = {
        name:"banana",
        quantity: 15,
        price: 5,
        batches:[
            batch
        ]
    }

    var items = [
        item
    ]

    var inventory = [
        //inventory
        {
            name:"Safeway",
            size: 15,
            items: items
        }
    ]

    localStorage.setItem("Inventories", JSON.stringify(inventory))
    addItem("Safeway", "Milk", 15, 1)
    addItem("Safeway", "Egg", 15, 1)
    addItem("Safeway", "Bread", 15, 1)
    addItem("Safeway", "Rice", 15, 1)

    localStorage.setItem("sales", 0)
}

init()
rerender()