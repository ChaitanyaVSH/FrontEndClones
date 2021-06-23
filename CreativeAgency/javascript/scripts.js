let button = document.querySelector(".toggle");
let themeToggler = document.querySelector(".darkThemeToggler");

button.addEventListener("click", () => {
    let navigationMenu = document.querySelector(".navigation")
    navigationMenu.classList.toggle("show")
});

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
});