let tabsItems = document.querySelectorAll(".tab-item");
let tabsContentItems = document.querySelectorAll(".tab-content-item");

// Click handler
function clicktoAction(event){

    // Removes border for other tabs
    removeBorder();
    removeShow();

    // Add border
    this.classList.add("tab-border")

    // Grab the  Tab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)

    // Add the show class to the tab item
    tabContentItem.classList.add("show")
}

function removeBorder(){
    tabsItems.forEach(item => item.classList.remove("tab-border"))
}

function removeShow(){
    tabsContentItems.forEach(item => item.classList.remove("show"))
}


// Listen for tab clicks
tabsItems.forEach(tabItem => {
    tabItem.addEventListener("click",clicktoAction)
});
