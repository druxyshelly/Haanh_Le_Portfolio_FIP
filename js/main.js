//Variables
const hamburgerOpenIcon = document.querySelector("#hamburger-open"),
    hamburgerCloseIcon = document.querySelector("#hamburger-close"),
    hamburgerMenu = document.querySelector("#hamburger-menu");

//Greensocks


gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

//ScrollSmoother

ScrollSmoother.create({
    smooth: 1,
    effects: true,
  });


//ScrollTrigger

gsap.registerPlugin('.name', {position: 'absolute'});

gsap.to('.name' , {
    yPercent: -100,
    stagger: 0.5,
    ScrollTrigger: {
        trigger: '.name',
        markers: true,
        start:'top top',
        end:'+=2000px',
        scrub: true,
        pin:true,
    }
})




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