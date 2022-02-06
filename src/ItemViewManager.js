function addItemCard(name, price, quantity) {

    let card = document.createElement('div')
    card.classList.add("card")
    card.classList.add("card-custom")
    //card.innerHTML = '<div class=\"card-body\"></div><h5 class=\"card-title\">'+name+'</h5><div href=\"\" class=\"btn btn-primary\"></div>'

    let cardBody = document.createElement('div')
    cardBody.className = "card-body"
    cardBody.style = " display:flex!important; flex-direction: row; justify-content: center; align-items: center; position: relative;"
    let cardTitle = document.createElement('h5')
    cardTitle.className = "card-title"
    
    cardBody.innerHTML = '<h5 style="font-size:25px;">'+name+'<br>    Quantity: '+quantity+' <br>    Price: '+price+'</h5>'

    let button = document.createElement('div')
    button.className = "btn btn-primary"

    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    card.appendChild(button)

    let buttonContainer = document.createElement('div')
    buttonContainer.className = 'button-container'
    buttonContainer.style = "position: absolute; margin: 10px; display: none; left: 30px; top: 30px;"
    let button1 = document.createElement('button')
    button1.innerHTML = "edit"
    button1.className = "btn btn-secondary"
    button1.style = "margin: 10px; width: 80px; height: 40px;"

    button1.addEventListener('click', () => {
        selected = name
        document.querySelector('#selectedName').innerHTML = name
        
        displayInfo()
    })

    let button2 = document.createElement('a')
    button2.innerHTML = "delete"
    button2.className = "btn btn-secondary"
    button2.style = "margin: 10px; width: 80px; height: 40px;"

    button2.addEventListener('click', () => {
        removeItem("Safeway", name)
        
    })

    buttonContainer.appendChild(button1)
    buttonContainer.appendChild(button2)

    card.addEventListener('mouseenter', () => {
        buttonContainer.style = 'position: absolute; margin: 10px; display: flex;'
    })

    card.addEventListener('mouseleave', () => {
        buttonContainer.style = 'position: absolute; margin: 10px; display: none'
    })

    card.appendChild(buttonContainer)

    let main = document.querySelector('.main')
    main.appendChild(card)
}

function rerender() {

    let main = document.querySelector('.main')
    main.innerHTML = ''

    getItems("Safeway").forEach(element => {
        addItemCard(element.name, element.price, element.quantity)
    });
}