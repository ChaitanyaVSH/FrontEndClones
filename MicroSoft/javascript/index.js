let button = document.querySelector('.menu-btn')

button.addEventListener("click", ()=>{
    document.querySelector(".main-menu").classList.toggle("show")
});

// Vague approach
// if(toggle)
// {
//     menu.classList.add("show");
// }
// else{
//     menu.classList.remove("show");
// }
// toggle= !toggle;
