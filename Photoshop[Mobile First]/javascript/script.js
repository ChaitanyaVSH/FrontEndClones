// Using JQuery to make the smooth scroll effect
// https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript?page=1&tab=votes#tab-top

let clickHandler = document.getElementById("view-work");
clickHandler.addEventListener("click", () =>{
    const images = $("#images").position().top;

    $('html, body').animate({
        scrollTop: images
    },900);
});


