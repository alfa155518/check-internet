let header = document.querySelector(".container h2");

let allLi = document.querySelector(".container ul");

let  buttonReload = document.querySelector(".reload")



if (window.navigator.onLine) {
    online()
} else {
    offline()
}

window.addEventListener("online", e => {
    online()
})
window.addEventListener("offline", e => {
    offline()
})

buttonReload.onclick = function() {
    window.location.reload()
}

function online() {
    header.innerHTML = "online"
    header.style.color = "Green"
    allLi.classList.add("haida")
    buttonReload.classList.add("haida")
} 

function offline() {
    header.innerHTML = "offline"
    header.style.color = "#333"
    allLi.classList.remove("haida")
    buttonReload.classList.remove("haida")
}

window.addEventListener("dr")