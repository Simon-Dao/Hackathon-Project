//InventoryManager()

function init() {
    /*
    let emptyText = document.createElement('h5')
    let main = document.querySelector('.main')
    main.append(emptyText)
*/
    var batch = {
        number: 15, 
        expiration: "2/5/2022" 
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
}

init()

