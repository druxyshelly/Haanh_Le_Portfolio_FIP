//Variables
const hamburgerOpenIcon = document.querySelector("#hamburger-open"),
    hamburgerCloseIcon = document.querySelector("#hamburger-close"),
    hamburgerMenu = document.querySelector("#hamburger-menu");




//Hamburger Menu

function openHamburgerMenu() {
    //Show the hamburger menu
    hamburgerMenu.style.visibility = "visible";
}

function closeHamburgerMenu() {
    //Hide the hamburger menu
    hamburgerMenu.style.visibility = "hidden";
}


//Event Listeners
hamburgerOpenIcon.addEventListener("click", openHamburgerMenu);
hamburgerCloseIcon.addEventListener("click", closeHamburgerMenu);