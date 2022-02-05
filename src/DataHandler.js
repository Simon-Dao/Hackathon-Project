function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
function removeItem(key) {
    localStorage.removeItem(key)
}
function getItem(key, value) {
    return JSON.parse(localStorage.getItem(key))
}
