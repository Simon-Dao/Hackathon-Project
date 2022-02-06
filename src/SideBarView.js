function displayInfo() {
    let totSales = document.querySelector('.sales-so-far')
    let salesTod = document.querySelector('.sales-today')
    let netEarn = document.querySelector('.net-earnings')
    let itLeft = document.querySelector('.items-left')

    totSales.innerHTML = 'Sales so far: ' + (localStorage.getItem(selected+"sales") == null ? 0 : localStorage.getItem(selected+"sales"))
    //salesTod.innerHTML = 'Sales today: ' + salesToday
    netEarn.innerHTML = 'Net earnings: ' +  (localStorage.getItem(selected+'money') == null ? 0 : localStorage.getItem(selected+'money'))
}

function calculateNetEarnings() {
    
}