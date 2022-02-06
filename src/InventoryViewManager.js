function addInventoryCard(name, size) {
    let card = document.createElement('div')
    card.classList.add("card")
    card.classList.add("card-custom")
    card.innerHTML = '<div class=\"card-body\"></div><h5 class=\"card-title\">'+name+'</h5><div href=\"\" class=\"btn btn-primary\"></div>'

    let main = document.querySelector('.main')
    main.appendChild(card)
}
