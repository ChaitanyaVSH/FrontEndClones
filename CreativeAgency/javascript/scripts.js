let button = document.querySelector(".toggle")

button.addEventListener("click", () => {
    let navigationMenu = document.querySelector(".navigation")
    navigationMenu.classList.toggle("show")
})